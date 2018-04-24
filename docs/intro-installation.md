---
id: intro-installation
title: Installation
---

```
npm install graphql graphql-compose --save
```

```
yarn add graphql graphql-compose
```

Module `graphql` declared in `peerDependencies`, so it should be installed explicitly in your project. It helps to solve a common problem when some of your other dependencies (like Relay, GraphiQL, graphql-compose) can leave your node_modules directory with duplicate installs of GraphQL.js. In such case graphql-js may throw errors that some classes are not instances of duplicate module.

Also you may need to install some graphql-compose plugins. Each plugin has own `Install` section with instructions.
