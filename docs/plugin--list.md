---
id: plugin--list
title: Plugins list
---

**`graphql-compose`** – the _imperative tool_ which worked on top of `graphql-js`. It provides useful methods for creating `GraphQL Types` and `GraphQL Models` (type with a list of
resolvers) for further building of complex relations in your `Schema`. With graphql-compose you may fastly write own functions/generators for common tasks.

**`graphql-compose-[plugin]`** – is a _declarative generator/plugin_ that build on top of `graphql-compose`, which take some ORMs, schema definitions and creates GraphQL Models from them or modify existed GraphQL Types.

## Type generator plugins
* [graphql-compose-json](plugin-json.md) - generates GraphQL type from JSON (a good helper for wrapping REST APIs)
* [graphql-compose-mongoose](plugin-mongoose.md) - generates GraphQL types from mongoose (MongoDB models) with Resolvers.
* [graphql-compose-elasticsearch](plugin-elasticsearch.md) - generates GraphQL types from elastic mappings; ElasticSearch REST API proxy via GraphQL.
* [graphql-compose-aws](plugin-aws.md) - expose AWS Cloud API via GraphQL

## Utility plugins
* [graphql-compose-relay](plugin-relay.md) - reassemble GraphQL types with `Relay` specific things, like `Node` type and interface, `globalId`, `clientMutationId`.
* [graphql-compose-connection](plugin-connection.md) - generates `connection` Resolver from `findMany` and `count` Resolvers.
* [graphql-compose-pagination](plugin-pagination.md) - generates `pagination` Resolver from `findMany` and `count` Resolvers.
* [graphql-compose-dataloader](https://github.com/stoffern/graphql-compose-dataloader) - add DataLoader to graphql-composer resolvers.
* [graphql-compose-recompose](https://github.com/digithun/graphql-compose-recompose) - utility that wrap GraphQL compose to high order functional pattern [work in process].

Have a great plugin built on top of `graphql-compose`? Feel free to add it on this page.
