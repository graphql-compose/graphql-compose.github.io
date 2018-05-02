---
id: api-SchemaComposer
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


## Methods

### buildSchema()
Create `EnumTypeComposer` with adding it by name to the `SchemaComposer`. This type became avaliable in SDL by its name.
```js
buildSchema(): GraphQLSchema
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
