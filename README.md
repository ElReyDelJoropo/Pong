<!--toc:start-->
# Pong

- [Requirements](#requirements)
- [Available Commands](#available-commands)
- [Writing Code](#writing-code)
- [Configuring Rollup](#configuring-rollup)
- [Todo](#todo)
  - [1. Add better menu](#1-add-better-menu)
  - [2. Add multiplayer capabilities using websockets](#2-add-multiplayer-capabilities-using-websockets)
<!--toc:end-->

## Requirements

[Node.js](https://nodejs.org) required to install dependencies and run scripts
via `npm`.

## Available Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install project dependencies |
| `npm run watch` | Build project and open web server running project, watching for changes |
| `npm run dev` | Builds project and open web server, but do not watch for changes |
| `npm run build` | Builds code bundle with production settings (minification, no source maps, etc..) |

## Writing Code

After cloning the repo, run `npm install` from your project directory. Then, you can start the local development
server by running `npm run watch`.

After starting the development server with `npm run watch`, you can edit any files in the `src` folder
and Rollup will automatically recompile and reload your server (available at `http://localhost:10001`
by default).

## Configuring Rollup

- Edit the file `rollup.config.dev.js` to edit the development build.
- Edit the file `rollup.config.dist.js` to edit the distribution build.

You will find lots of comments inside the rollup config files to help you do this.

Note that due to the build process involved, it can take around 20 seconds to build the initial bundle. Times will vary based on CPU and local drive speeds. The development config does not minify the code in order to save build time, but it does generate source maps. If you do not require these, disable them in the config to speed it up further.

## Todo

### 1. Add better menu

### 2. Add multiplayer capabilities using websockets
