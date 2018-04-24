---
id: api-Resolver
title: Resolver
---

The most interesting class in `graphql-compose`. The main aim of `Resolver` is to keep available resolve methods for Type and use them for building relation with other types.
`Resolver` provide following abilities:

* Add, remove, get, make optional/required arguments
* Clone resolver
* Wrap args, type, resolve (get resolver and create new one with extended/modified functionality)
* Provide helper methods `addFilterArg` and `addSortArg` which wrap resolver by adding argument and resolve logic

In terms of GraphQL Resolver is `GraphQLFieldConfig` with additional functionality and consists from following properties:

* `type` output complex or scalar type (resolver returns data of this type)
* `args` list of field of input or scalar types (resolver accept input arguments for `resolve` method)
* `resolve` method which gather data from data-source
* `description` public description which will be passed to graphql schema and will be available via introspection
* `deprecationReason` if you want to hide field from schema, but leave it working for old clients
* `name` any name for resolver that allow to you identify what it does, eg `findById`, `updateMany`, `removeOne`
* `parent` you may wrap `Resolver` for adding additional checks, modifying result, adding arguments... so this property keeps reference to previous wrapped Resolver
* `kind` type of resolver `query` (resolver just fetch data) or `mutation` (resolver may change data)

```js
const resolver = new Resolver({
  name: 'findById',
  type: LonLatTC, // or GraphQLOutputType
  args: {
    id: 'Int!',
  },
  resolve: ({ source, args, context, info }) => {
    return DB.findById(args.id);
  }
});
// add `findById` resolver to our LonLat type composer for future creation of relations
LonLatTC.addResolver(resolver); // or you may just provide ResolverOpts from above

resolver.hasArg('id'); // true
resolver.getArg('id'): // GraphQLArgumentConfig
resolver.getArgType('id'); // GraphQLInt
resolver.getArgTC('complexArg'); // InputTypeComposer
resolver.getArgs(); // GraphQLFieldConfigArgumentMap
resolver.getArgNames(); // ['id'], list of arg names
resolver.setArgs(GraphQLFieldConfigArgumentMap); // completely replace all args
resolver.setArg('code', GraphQLArgumentConfig); // set or replace arg
resolver.addArgs(GraphQLFieldConfigArgumentMap); // add new args, replace existed, rest args keep untouched
resolver.cloneArg('filter', 'NewFilterInput'); // clone complex input argument (GraphQLInputObjectType) with new name
resolver.removeArg('code');
resolver.removeOtherArgs(['arg1', 'arg2']); // will remove all other args
resolver.reorderArgs(['arg2', 'arg1']); // reorder args in schema, arg2 becomes first
resolver.isRequired('id'); // true
resolver.makeRequired('id'); // wrap field type by GraphQLNonNull (if not wrapped already)
resolver.makeOptional('id'); // unwrap from GraphQLNonNull (if not unwrapped already)
resolver.getType(); // GraphQLOutputType
resolver.getTypeComposer(); // return TypeComposer with GraphQLOutputType
resolver.setType(GraphQLOutputType | TypeDefinitionString | TypeNameString | TypeComposer)
resolver.getFieldConfig() // { type: ..., args: ..., resolve: ..., description: ...}
resolver.setDescription('Find LatLon by id');
resolver.getDescription(); // 'Find LatLon by id'
resolver.get('dot.path'); // described below in `typeByPath` section
resolver.clone(); // new Resolver instance

// create new wrapped resolver via callback with series of modify methods
resolver.wrap((newResolver, prevResolver) => {
  /* series of modify methods add/get/set/remove */
}); // returns new Resolver

// create new wrapped resolver (wrap only resolve method)
// next = call wrapped resolver
// rp = resolveParams = { source, args, context, info, projection }
resolver.wrapResolve((next) => (rp) => {
  // HERE you may change or check resolveParams
  if (!rp.args.id) return null; // eg interrupt invocation of sub resolve method

  const result = next(rp); // invocate sub resolve method

  // HERE you may change result

  return result;
}); // returns new Resolver
resolver.wrapCloneArg('filter', 'NewFilterInput'); // returns new Resolver with cloned argument type
resolver.addFilterArg(...)  // see https://github.com/nodkz/graphql-compose/issues/22
resolver.addSortArg(...)  // see https://github.com/nodkz/graphql-compose/issues/26

// And other methods:
// wrapArgs
// wrapType
```
