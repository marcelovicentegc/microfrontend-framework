<p align="center">
  <h3 align="center">microfrontend-framework</h3>
</p>

---

- [NextJS microfrontend framework with build-time integration approach](#nextjs-microfrontend-framework-with-build-time-integration-approach)
  - [Packages](#packages)
  - [Strenghts](#strenghts)
  - [Weaknesses](#weaknesses)
  - [Playing with the POC](#playing-with-the-poc)
- [Architecture](#architecture)
  - [Interaction Overview](#interaction-overview)

# NextJS microfrontend framework with build-time integration approach

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

## Strenghts

- All the benefits of a NextJS monolith that doesn't need to be manually managed. Namely, performance and consistent UX.
- Automated CHANGELOG for each tenant.
- Code deduplication.
- Acceptable workflow for **small teams** or **lonely wolves** that doesn't deal with thousands of tenants or microfrontend apps changes at a fast pace.

## Weaknesses

- Lockstep release process.
  - > If the concepts presented here are applied smartly, it is possible to skip the lockstep release process.
- Difficult to scale. How to orchestrate updates in thousands of tenants and hundreds of apps, often simultaneously? Good luck with that.

## Playing with the POC

```bash
# Install the CLI
yarn global add @mf-framework/cli

# Go through CLI prompt...
mf-framework-cli create

# Jump into the created apps' root folder if you haven't already
cd <app-name>

# Publishes to Firestore
mf-framework-cli publish

# Installs app on the default tenant: glowing-fiesta
mf-framework-cli install
```

# Architecture

## Interaction Overview

![Microfrontend Framework](./assets/microfrontend-framework.svg)
