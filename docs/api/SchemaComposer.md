---
id: SchemaComposer
title: SchemaComposer
---

`SchemaComposer` is a class which helps to create `GraphQLSchema`.

## Getters

### Query

Returns `TypeComposer` of `Query` root type.

```js
import { schemaComposer } from 'graphql-compose';

schemaComposer.Query.addFields({ ... });
```

### Mutation

Returns `TypeComposer` of `Mutation` root type.

```js
import { schemaComposer } from 'graphql-compose';

schemaComposer.Mutation.addFields({ ... });
```

### Subscription

Returns `TypeComposer` of `Subscription` root type.

```js
import { schemaComposer } from 'graphql-compose';

schemaComposer.Subscription.addFields({ ... });
```

### TypeComposer

```js
const MeTC = schemaComposer.TypeComposer.create(`type Me { name: String! }`);
```

### InputTypeComposer

```js
const MeITC = schemaComposer.InputTypeComposer.create(`input MeInput { name: String! }`);
```

### EnumTypeComposer

```js
const SortETC = schemaComposer.EnumTypeComposer.create(`enum Sort { ASC, DESC }`);
```

### InterfaceTypeComposer

```js
const HumanIFTC = schemaComposer.InterfaceTypeComposer.create(`interface Human { name: String! }`);
```

### Resolver

```js
const fetchResolver = new schemaComposer.Resolver({ ... });
```

### TypeMapper

```js
const GraphQLTypeMe = schemaComposer.TypeMapper.createType(`type Me { name: String! }`);
```

## Methods

### buildSchema()

Create `EnumTypeComposer` with adding it by name to the `SchemaComposer`. This type became avaliable in SDL by its name.

```js
type ExtraSchemaConfig = {
  types?: GraphQLNamedType[] | null,
  directives?: GraphQLDirective[] | null,
  astNode?: SchemaDefinitionNode | null,
};

buildSchema(extraConfig?: ExtraSchemaConfig): GraphQLSchema
```

### addTypeDefs()

Add types to Schema via SDL string. Returns a Map of parsed types.

```js
addTypeDefs(typeDefs: string): TypeStorage<GraphQLNamedType>;
```

```js
const schemaComposer = new SchemaComposer();
schemaComposer.addTypeDefs(`
  type Post {
    id: Int!
    title: String
    votes: Int
  }

  enum Sort {
    ASC
    DESC
  }
`);
```

After that your added types will be avaliable for referencing via string, eg.

```js
TypeComposer.create({
  name: 'Author',
  fields: {
    posts: {
      type: '[Post!]',
      args: {
        sort: 'Sort',
      },
      resolve: () => { ... },
    }
  }
});
```

### addResolveMethods()

Define `resolve` methods for Types in `graphql-tools` manner.

```js
addResolveMethods({
  [typeName: string]: {
    [fieldName: string]: (
      source: any,
      args: Object,
      context: TContext,
      info: GraphQLResolveInfo
    ) => any,
  },
}): void
```

```js
schemaComposer.addResolveMethods({
  Query: {
    posts: () => Post.find(),
  },
  Post: {
    votes: (post) => Vote.getFor(post.id),
  },
});
```

More details can be found in [issue #142](https://github.com/graphql-compose/graphql-compose/issues/142).

### addSchemaMustHaveType()

When using Interfaces you may have such Types which are hidden under Interface.resolveType method. In such cases you should add these types explicitly. Cause `buildSchema()` will take only real used types and types which added via `addSchemaMustHaveType()` method.

```js
addSchemaMustHaveType(type: MustHaveTypes<TContext>): this;
```

### getOrCreateTC()

```js
getOrCreateTC(
  typeName: string,
  onCreate?: (TypeComposer) => any
): TypeComposer
```

### getOrCreateITC()

```js
getOrCreateITC(
  typeName: string,
  onCreate?: (InputTypeComposer) => any
): InputTypeComposer
```

### getOrCreateETC()

```js
getOrCreateETC(
  typeName: string,
  onCreate?: (EnumTypeComposer) => any
): EnumTypeComposer
```

### getOrCreateIFTC()

```js
getOrCreateETC(
  typeName: string,
  onCreate?: (iftc: InterfaceTypeComposer<TContext>) => any
): InterfaceTypeComposer<TContext>
```

## Storage methods

### add()

```js
add(
  value: ComposeType
): ?string
```

### hasInstance()

```js
hasInstance(
  typeName: string,
  ClassObj: typeof ComposeType
): boolean
```

### getOrSet()

```js
getOrSet(
  typeName: string,
  typeOrThunk: ComposeType | (() => ComposeType)
): V<TContext>
```

### getTC()

```js
getTC(
  typeName: string
): TypeComposer<TContext>
```

### getITC()

```js
getITC(
  typeName: string
): InputTypeComposer
```

### getETC()

```js
getETC(
  typeName: string
): EnumTypeComposer
```

### getIFTC()

```js
getIFTC(
  typeName: string
): InterfaceTypeComposer<TContext>
```

## Map methods

### clear()

Remove all types from Schema

```js
clear(): void
```

### delete()

```js
delete(typeName: string): boolean
```

### entries()

```js
entries(): Iterator<[string, ComposeType]>
```

### forEach()

```js
forEach(
 callbackfn: (
   value: ComposeType,
   index: string,
   map: Map<string, ComposeType>
 ) => mixed,
 thisArg?: any
): void
```

### get()

```js
get(typeName: string): ComposeType
```

### has()

```js
has(typeName: string): boolean
```

### keys()

```js
keys(): Iterator<string>
```

### set()

```js
set(
  typeName: string,
  value: ComposeType
): TypeStorage<TContext>
```

### values()

```js
values(): Iterator<ComposeType>
```

## Directives methods

### addDirective()

```js
addDirective(
    directive: GraphQLDirective
): this;
```

### removeDirective()

```js
removeDirective(
  directive: GraphQLDirective
): this;
```

### getDirectives()

```js
getDirectives(): GraphQLDirective[];
```

### hasDirective()

```js
hasDirective(
  directive: string | GraphQLDirective
): boolean;
```

## Internal type definitions

Flowtype definitions which are used in this class.

### ExtraSchemaConfig

```js
type ExtraSchemaConfig = {
  types?: ?Array<GraphQLNamedType>,
  directives?: ?Array<GraphQLDirective>,
  astNode?: ?SchemaDefinitionNode,
};
```

### MustHaveTypes

```js
type MustHaveTypes<TContext> =
  | _TypeComposer<TContext>
  | _InputTypeComposer
  | _EnumTypeComposer
  | _InterfaceTypeComposer<TContext>
  | GraphQLNamedType;
```