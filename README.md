# Gamertime

A non-profit social media website

## Local Setup

0. If on Windows, setup [WSL](https://learn.microsoft.com/en-us/windows/wsl/install)

1. Install [Bun](https://bun.sh/docs/installation)
    - Recommended install for wsl if on Windows
    - If you install through wsl you'll likely need to install unzip `sudo apt-get install unzip`

2. Install [Docker](https://docs.docker.com/engine/install/)

3. Run `bun setup`

4. Run `bun run_database_migrations`

## Run Locally

1. Run `bun dev`

2. Open http://localhost:3000/ in your browser
