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
$ mf-framework-cli COMMAND
running command...
$ mf-framework-cli (-v|--version|version)
@mf-framework/cli/0.0.13 darwin-arm64 node-v16.13.0
$ mf-framework-cli --help [COMMAND]
USAGE
  $ mf-framework-cli COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`mf-framework-cli create`](#mf-framework-cli-create)
* [`mf-framework-cli help [COMMAND]`](#mf-framework-cli-help-command)
* [`mf-framework-cli install [TENANT]`](#mf-framework-cli-install-tenant)
* [`mf-framework-cli publish`](#mf-framework-cli-publish)

## `mf-framework-cli create`

creates a new mf-app

```
USAGE
  $ mf-framework-cli create

OPTIONS
  --framework=nextjs|react

EXAMPLE
  $ npx @mf-framework/cli create
```

_See code: [src/commands/create.ts](https://github.com/marcelovicentegc/microfrontend-framework/blob/v0.0.13/src/commands/create.ts)_

## `mf-framework-cli help [COMMAND]`

display help for mf-framework-cli

```
USAGE
  $ mf-framework-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.4/src/commands/help.ts)_

## `mf-framework-cli install [TENANT]`

installs a published mf-app on a tenant

```
USAGE
  $ mf-framework-cli install [TENANT]

ARGUMENTS
  TENANT  (glowing-fiesta|vigilant-octo-sniffle|redesigned-robot) [default: glowing-fiesta] output file

EXAMPLE
  $ npx @mf-framework/cli install
```

_See code: [src/commands/install.ts](https://github.com/marcelovicentegc/microfrontend-framework/blob/v0.0.13/src/commands/install.ts)_

## `mf-framework-cli publish`

creates a new mf-app

```
USAGE
  $ mf-framework-cli publish

EXAMPLE
  $ npx @mf-framework/cli publish
```

_See code: [src/commands/publish.ts](https://github.com/marcelovicentegc/microfrontend-framework/blob/v0.0.13/src/commands/publish.ts)_
<!-- commandsstop -->
