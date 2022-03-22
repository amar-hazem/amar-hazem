# dollop

Welcome to dollop. Dollop is a system of multiple applications inspired by the
Google Suite. It's built with NX to manage the monorepo, Angular for the
frontend and Nest for the backend.

## Getting Started

These instructions will get you a copy of the project up and running on your
local machine for development and testing purposes. See deployment for notes
on how to deploy the project on a live system.

### Prerequisites

You will need a few tools to be able to start coding on dollop.

#### nvm and node

Install node and npm through nvm.

#### webStorm

Download [Toolbox](https://www.jetbrains.com/toolbox/app/?fromMenu) and install
it. You will need to create an account
[here](https://account.jetbrains.com/login) and login to Toolbox.

#### Docker

Download
[Docker](https://hub.docker.com/editions/community/docker-ce-desktop-windows),
and install it. You will need to create an account
[here](https://hub.docker.com/signup) and login to your Docker app.

#### Git

Download [Git](https://gitforwindows.org/) and install it. That's it, no need
for an account.

#### Global packages

Run `npm install -g @angular/cli @compodoc/compodoc @nestjs/cli @nrwl/cli
npm-check npm-check-updates prettier yarn`.

### Installing

1. Pull [dollop](https://gitlab.com/amar-hazem/dollop.git) from its repository.
   You need to create a GitHub account and ask to join the project
   [dollop](https://github.com/amar-hazem/dollop).
2. Install dependencies: `npm install`.
3. Run the dollop utils command, and the start command for the applications you
are working on.

## Joining the Slack

Join the [slack chat](https://dollop-hq.slack.com).

## Built With

- [Angular](https://angular.io) - Front-end framework
- [Angular Material](https://material.angular.io) - Components for Angular
- [Docker](https://www.docker.com) - The running environment
- [Github](https://github.com) - The repository tool
- [Mongo](https://www.mongodb.com) - The database
- [Nest](https://nestjs.com) - Back-end framework
- [Node](https://nodejs.org) - The javascript server platform
- [NX](https://nx.dev) - The monorepo tool
- [Redis](https://redis.io) - The cache and message broker system
- [Typescript](https://www.typescriptlang.org) - The language
- [webStorm](https://www.jetbrains.com/webstorm) - The IDE

## Useful commands

- Generate an application `nx g @nrwl/<angular|nest>:app <app-name>`
- Generate a library `nx g @nrwl/<angular|nest>:lib <lib-name>`
- Generate a component `nx g @nrwl/<angular|nest>:component <component-name>
--project=<project-name>`

## Contributing process

You need to follow a specific process to contribute to the project.

### Developing a new feature

1. Select your issue and create a branch
2. Pull the branch
3. Run npm install to update the dependencies
4. Write or update your unit tests
5. Write your new code
6. Run your tests until they succeed
7. Push the new commit and open a merge request
8. Correct any reviewing comments
9. Merge the feature

### Condition for a new feature to be validated

1. 100% of test coverage
2. 100% of documentation coverage
3. All tests pass
4. Audit pass
5. Linting pass
6. Lighthouse pass

## Versioning

We use the same versioning as JetBrains: <year>.<month>.<minors>.

## Authors

- **Amar Hazem** - _Initial work_ - [amar-hazem](https://github.com/amar-hazem)
