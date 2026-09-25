// The desk cube shares the membership token's rounded engraving and shell.
// node scripts/build-corporate-plaque.cjs /absolute/path/to/three
const {spawnSync}=require('node:child_process');
const path=require('node:path');
const result=spawnSync(process.execPath,[path.join(__dirname,'build-membership-mesh.cjs'),process.argv[2]||'three','cube'],{stdio:'inherit'});
if(result.error)throw result.error;
process.exitCode=result.status??1;
