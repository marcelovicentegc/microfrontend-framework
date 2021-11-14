# @mf-framework/cli

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@mf-framework/cli.svg)](https://npmjs.org/package/@mf-framework/cli)
[![Downloads/week](https://img.shields.io/npm/dw/@mf-framework/cli.svg)](https://npmjs.org/package/@mf-framework/cli)
[![License](https://img.shields.io/npm/l/@mf-framework/cli.svg)](https://github.com/marcelovicentegc/microfrontend-framework/blob/master/package.json)

<!-- toc -->
* [@mf-framework/cli](#mf-frameworkcli)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g @mf-framework/cli
$ cli COMMAND
running command...
$ cli (-v|--version|version)
@mf-framework/cli/0.0.1 darwin-arm64 node-v16.13.0
$ cli --help [COMMAND]
USAGE
  $ cli COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`cli create`](#cli-create)
* [`cli help [COMMAND]`](#cli-help-command)

## `cli create`

creates a new mf-app

```
USAGE
  $ cli create

OPTIONS
  --framework=framework

EXAMPLE
  $ npx create-mf-app my-mf-app
```

_See code: [src/commands/create.ts](https://github.com/marcelovicentegc/microfrontend-framework/blob/v0.0.1/src/commands/create.ts)_

## `cli help [COMMAND]`

display help for cli

```
USAGE
  $ cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.4/src/commands/help.ts)_
<!-- commandsstop -->
