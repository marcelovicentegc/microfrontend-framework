<p align="center">
  <h3 align="center">microfrontend-framework</h3>
</p>

---

- [Packages](#packages)
- [Build-time model](#build-time-model)
  - [Strenghts](#strenghts)
  - [Weaknesses](#weaknesses)
  - [Architecture](#architecture)
    - [Interaction Overview](#interaction-overview)

## Packages

| Package                                            | Description                                                                       |
| -------------------------------------------------- | --------------------------------------------------------------------------------- |
| [`@mf-framework/builders`](../packages/builders)   | Service responsible for patching tenants with new apps                            |
| [`@mf-framework/cli`](../packages/cli)             | CLI that interfaces with the registry and the builder services to develop MF apps |
| [`@mf-framework/container`](../packages/container) | Container application                                                             |
| [`@mf-framework/config`](../packages/config)       | Configuration interface to fit a MF app into the container of a tenant            |
| [`@mf-framework/registry`](../packages/registry)   | Service that acts as a wrapper for Firestore                                      |
| [`@mf-framework/sdk`](../packages/sdk)             | WIP                                                                               |
| [`@mf-framework/templates`](../packages/templates) | Getting started templates                                                         |

## Build-time model

It uses a build-time integration approach via NextJS pages.

### Strenghts

- All the benefits of a NextJS monolith that doesn't need to be manually managed. Namely, performance and consistent UX.
- Automated CHANGELOG for each tenant.
- Code deduplication.

### Weaknesses

- Lockstep release process
  - > If the concepts presented here are applied smartly, it's possible to skip the lockstep release process.

### Architecture

#### Interaction Overview

![Microfrontend Framework](./assets/microfrontend-framework.svg)
