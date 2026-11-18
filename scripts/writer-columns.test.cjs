const test = require('node:test');
const assert = require('node:assert/strict');
const { chooseHeight } = require('../assets/js/writer-columns.js');

// Model native fragmentation with indivisible paragraph / heading-and-body groups.
function flow(blocks, height) {
  let columns = 1;
  let lastHeight = 0;
  for (const block of blocks) {
    if (lastHeight && lastHeight + block > height) {
      columns++;
      lastHeight = 0;
    }
    lastHeight += block;
  }
  return { columns, lastHeight };
}

function solve(blocks, columns, budget, initialHeight) {
  return chooseHeight({
    columns, budget, initialHeight,
    totalHeight: blocks.reduce((sum, height) => sum + height, 0),
    measure: height => flow(blocks, height),
  });
}

test('extends the left column to keep the final column within the viewport budget', () => {
  const blocks = Array(10).fill(100);
  const height = solve(blocks, 2, 300, 500);
  assert.ok(height > 500);
  assert.deepEqual(flow(blocks, height), { columns: 2, lastHeight: 300 });
});

test('supports three columns while preserving the number of occupied columns', () => {
  const blocks = Array(15).fill(100);
  const height = solve(blocks, 3, 300, 500);
  assert.deepEqual(flow(blocks, height), { columns: 3, lastHeight: 300 });
});

test('keeps the initial height if the last column already fits', () => {
  assert.equal(solve(Array(10).fill(40), 2, 400, 200), 200);
});

test('falls back when the final code block cannot fit, without hiding it or adding columns', () => {
  assert.equal(solve([...Array(8).fill(100), 700], 2, 300, 800), null);
});

test('recalculates when images grow or the viewport becomes shorter', () => {
  const smallImage = [...Array(9).fill(100), 100];
  const largeImage = [...Array(9).fill(100), 240];
  const before = solve(smallImage, 2, 400, 500);
  const after = solve(largeImage, 2, 260, 600);
  assert.ok(after > before);
  assert.equal(flow(largeImage, after).columns, 2);
  assert.ok(flow(largeImage, after).lastHeight <= 260);
});
