<p align="center">
  <h3 align="center">microfrontend-framework</h3>
</p>

---

- [Packages](#packages)
- [Multi-tenant mixed approach model](#multi-tenant-mixed-approach-model)
  - [Strenghts](#strenghts)
  - [Weaknesses](#weaknesses)
  - [Architecture](#architecture)
    - [Interaction Overview](#interaction-overview)

## Packages

| Package                                                    | Description |
| ---------------------------------------------------------- | ----------- |
| [`@mf-framework/builders`](../packages/builders)           |             |
| [`@mf-framework/cli`](../packages/cli)                     |             |
| [`@mf-framework/container`](../packages/container)         |             |
| [`@mf-framework/mf-app-config`](../packages/mf-app-config) |             |
| [`@mf-framework/registry`](../packages/registry)           |             |
| [`@mf-framework/sdk`](../packages/sdk)                     |             |
| [`@mf-framework/templates`](../packages/templates)         |             |

## Multi-tenant mixed approach model

It uses a mixed approach, a merge between build-time lockstep-release-process-free and run-time integration via NextJS pages that manages to benefit with the best of both worlds by relying in a strong automated workflow.

### Strenghts

- No iframes involved.
- Flexibility of the run-time integration approach, where each micro frontend is included and removed onto/from the page on-demand.
- Each micro frontend can be deployed independently.
- All the benefits of a NextJS monolith that doesn't need to be manually managed.
- Automated CHANGELOG for each tenant.
- Code deduplication.

### Weaknesses

- We'll get there...

### Architecture

#### Interaction Overview

![Microfrontend Framework](./assets/microfrontend-framework.svg)
