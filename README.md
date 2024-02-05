# Gamertime

A non-profit social media website

## Local Setup

0. If on Windows, setup [WSL](https://learn.microsoft.com/en-us/windows/wsl/install)

1. Install [Bun](https://bun.sh/docs/installation)
    - Recommended install for wsl if on Windows
    - If you install through wsl you'll likely need to install unzip `sudo apt-get install unzip`

2. `cd` into the root of the repo

3. Run `bun setup`

4. Run `bun run_database_migrations`

> Note: If you run into issues with this setup, try running `bun clean` and retrying steps 3-4. `bun clean` will delete your sqlite database and delete the migrations metadata so a clean migration can be run.

## Run Locally

1. Run `bun dev`

2. Open http://localhost:3000/ in your browser

## View Database Locally

1. Run `bunx drizzle-kit studio` at the repository root

2. Go to https://local.drizzle.studio
