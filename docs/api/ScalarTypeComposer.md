---
id: ScalarTypeComposer
title: ScalarTypeComposer
---

`ScalarTypeComposer` is a class which helps to create and modify `GraphQLScalarType`.

## Static methods

### static create()

Create `ScalarTypeComposer` with adding it by name to the `SchemaComposer`. This type became avaliable in SDL by its name.

```js
static create(
  opts: TypeAsString | GraphQLScalarTypeConfig | GraphQLScalarType
): ScalarTypeComposer
```

### static createTemp()

Create `ScalarTypeComposer` without adding it to the `SchemaComposer`. This method may be usefull in plugins, when you need to create type temporary.

```js
static createTemp(
  opts: TypeAsString | GraphQLScalarTypeConfig | GraphQLScalarType
): ScalarTypeComposer
```

## Properties

### schemaComposer

Current `SchemaComposer` instance which is used for storing types created by `ScalarTypeComposer`.

```js
SomeSTC.schemaComposer: SchemaComposer;
```

## Serialize methods

### setSerialize()

```js
setSerialize(fn: GraphQLScalarSerializer<any>): void;
```

### getSerialize()

```js
getSerialize(): GraphQLScalarSerializer<any>;
```

### setParseValue()

```js
setParseValue(fn: ?GraphQLScalarValueParser<any>): void;
```

### getParseValue()

```js
getParseValue(): GraphQLScalarValueParser<any>;
```

### setParseLiteral()

```js
setParseLiteral(fn: ?GraphQLScalarLiteralParser<any>): void;
```

### getParseLiteral()

```js
getParseLiteral(): GraphQLScalarLiteralParser<any>;
```

## Type methods

### getType()

```js
getType(): GraphQLScalarType;
```

### getTypePlural()

```js
getTypePlural(): GraphQLList<GraphQLScalarType>;
```

### getTypeNonNull()

```js
getTypeNonNull(): GraphQLNonNull<GraphQLScalarType>;
```

### getTypeName()

```js
getTypeName(): string;
```

### setTypeName()

```js
setTypeName(
  name: string
): ScalarTypeComposer;
```

### getDescription()

```js
getDescription(): string;
```

### setDescription()

```js
setDescription(
  description: string
): ScalarTypeComposer;
```

### clone()

Create a new Scalar type with provided name.

```js
clone(
  newTypeName: string
): ScalarTypeComposer;
```

## Internal type definitions

Flowtype definitions which are used in this class.

### ScalarTypeComposerDefinition

```js
type ScalarTypeComposerDefinition =
  | TypeAsString
  | GraphQLScalarTypeConfig
  | GraphQLScalarType;
```