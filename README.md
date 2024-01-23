# Gamertime

A non-profit social media website

## Local Setup

0. If on Windows, setup [WSL](https://learn.microsoft.com/en-us/windows/wsl/install)

1. Install [Bun](https://bun.sh/docs/installation)
    - Recommended install for wsl if on Windows
    - If you install through wsl you'll likely need to install unzip `sudo apt-get install unzip`

2. Install [Docker](https://docs.docker.com/engine/install/)

3. Ensure the Docker Engine is running (open Docker Desktop). WSL is not aware of Docker if Docker Desktop isn't running.

4. `cd` into the root of the repo

5. Run `bun setup`

6. Run `bun run_database_migrations`

> Note: If you run into issues with this setup, try running `bun clean` and retrying steps 3-4. `bun clean` will delete your postgress docker container and delete the migrations metadata so a clean migration can be run.

## Run Locally

1. Ensure the Docker Engine is running (open Docker Desktop). WSL is not aware of Docker if Docker Desktop isn't running.

2. Run `bun dev`

3. Open http://localhost:3000/ in your browser

## View Database Locally

1. Ensure the Docker Engine is running (open Docker Desktop). WSL is not aware of Docker if Docker Desktop isn't running.

2. Run `bunx drizzle-kit studio` at the repository root

3. Go to https://local.drizzle.studio
