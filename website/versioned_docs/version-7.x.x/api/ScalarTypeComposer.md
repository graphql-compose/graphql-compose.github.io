---
id: version-7.x.x-ScalarTypeComposer
title: ScalarTypeComposer
custom_edit_url: https://github.com/graphql-compose/graphql-compose/blob/master/src/ScalarTypeComposer.d.ts
original_id: ScalarTypeComposer
---

<!-- 
🛑🛑🛑
DO NOT EDIT THIS FILE!
IT WAS AUTOGENERATED FROM d.ts FILE
🛑🛑🛑
If you want to make changes in this file, please do it via
https://github.com/graphql-compose/graphql-compose/blob/master/src/ScalarTypeComposer.d.ts
-->

`ScalarTypeComposer` is a class which helps to create and modify `GraphQLScalarType`.

## Static methods

### static create()

```js
static create<TCtx = any>(
  typeDef: ScalarTypeComposerDefinition,
  schemaComposer: SchemaComposer<TCtx>
): ScalarTypeComposer<TCtx>
```

Create `ScalarTypeComposer` with adding it by name to the `SchemaComposer`. This type became avaliable in SDL by its name.

### static createTemp()

```js
static createTemp<TCtx = any>(
  typeDef: ScalarTypeComposerDefinition,
  schemaComposer: SchemaComposer<TCtx>
): ScalarTypeComposer<TCtx>
```

Create `ScalarTypeComposer` without adding it to the `SchemaComposer`. This method may be usefull in plugins, when you need to create type temporary.

## Properties

### schemaComposer

```js
schemaComposer: SchemaComposer<TContext>;
```

## Serialize methods

### setSerialize()

```js
setSerialize(
  fn: GraphQLScalarSerializer<any>
): void
```

### getSerialize()

```js
getSerialize(): GraphQLScalarSerializer<any>
```

### setParseValue()

```js
setParseValue(
  fn: GraphQLScalarValueParser<any> | void
): void
```

### getParseValue()

```js
getParseValue(): GraphQLScalarValueParser<any>
```

### setParseLiteral()

```js
setParseLiteral(
  fn: GraphQLScalarLiteralParser<any> | void
): void
```

### getParseLiteral()

```js
getParseLiteral(): GraphQLScalarLiteralParser<any>
```

## Type methods

### getType()

```js
getType(): GraphQLScalarType
```

### getTypePlural()

```js
getTypePlural(): ListComposer<ScalarTypeComposer<TContext>>
```

### getTypeNonNull()

```js
getTypeNonNull(): NonNullComposer<ScalarTypeComposer<TContext>>
```

### getTypeName()

```js
getTypeName(): string
```

### setTypeName()

```js
setTypeName(
  name: string
): this
```

### getDescription()

```js
getDescription(): string
```

### setDescription()

```js
setDescription(
  description: string
): this
```

### clone()

```js
clone(
  newTypeNameOrTC: string | ScalarTypeComposer<any>
): ScalarTypeComposer<TContext>
```

You may clone this type with a new provided name as string.
Or you may provide a new TypeComposer which will get all clonned
settings from this type.

### merge()

```js
merge(
  type: GraphQLScalarType | ScalarTypeComposer<any>
): this
```

## Extensions methods

### getExtensions()

```js
getExtensions(): Extensions
```

### setExtensions()

```js
setExtensions(
  extensions: Extensions
): this
```

### extendExtensions()

```js
extendExtensions(
  extensions: Extensions
): this
```

### clearExtensions()

```js
clearExtensions(): this
```

### getExtension()

```js
getExtension(
  extensionName: string
): any
```

### hasExtension()

```js
hasExtension(
  extensionName: string
): boolean
```

### setExtension()

```js
setExtension(
  extensionName: string,
  value: any
): this
```

### removeExtension()

```js
removeExtension(
  extensionName: string
): this
```

## Directive methods

### getDirectives()

```js
getDirectives(): ExtensionsDirective[]
```

### getDirectiveNames()

```js
getDirectiveNames(): string[]
```

### getDirectiveByName()

```js
getDirectiveByName(
  directiveName: string
): DirectiveArgs | void
```

### getDirectiveById()

```js
getDirectiveById(
  idx: number
): DirectiveArgs | void
```

## Internal type definitions

### ScalarTypeComposerDefinition

```js
export type ScalarTypeComposerDefinition =
  | TypeAsString
  | Readonly<ScalarTypeComposerAsObjectDefinition>
  | Readonly<GraphQLScalarType>;
```

### ScalarTypeComposerAsObjectDefinition

```js
export type ScalarTypeComposerAsObjectDefinition = GraphQLScalarTypeConfig<any, any> & {
  extensions?: Extensions;
};
```
