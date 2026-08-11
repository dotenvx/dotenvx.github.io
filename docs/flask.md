---
layout: docs-quickstart
title: "Flask"
social_title: "Encrypt a .env file in Flask"
description: "Encrypt a .env file in Flask with the Dotenvx SDK, commit it safely, and load its secrets at runtime."
icon: flask
permalink: /docs/flask/
redirect_from:
  - /docs/frameworks/flask
  - /docs/frameworks/flask/
  - /docs/secrets-in-flask/
  - /docs/secrets-in-flask
install_lede: "Get the Dotenvx Python SDK."
install_after_lede: "And the CLI to encrypt files."
inject_lede: "Then inject your encrypted secrets at runtime."
install_copy: "pip install python-dotenvx"
install_after_copy: "curl -sfS https://dotenvx.sh | sh"
encrypt_copy: "dotenvx encrypt"
inject_copy: |
  import os
  from flask import Flask
  from dotenvx import load_dotenv

  load_dotenv()

  app = Flask(__name__)

  @app.get("/")
  def index():
      return f"HELLO: {os.getenv('HELLO')}"
install: |
  $ pip install python-dotenvx
install_after: |
  $ curl -sfS https://dotenvx.sh | sh
encrypt: |
  $ dotenvx encrypt
inject: |
  import os
  from flask import Flask
  from dotenvx import load_dotenv

  load_dotenv()

  app = Flask(__name__)

  @app.get("/")
  def index():
      return f"HELLO: {os.getenv('HELLO')}"
---
