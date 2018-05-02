---
id: basics-types
title: Type creation
---

## Scalar types
Graphql-compose has following built-in scalar types:
- `String`
- `Float`
- `Int`
- `Boolean`
- `ID`
- `Date`
- `JSON`

## Object types via TypeComposer
If you need to create some complex type with several properties, you will need to use `TypeComposer`. It's a builder for `GraphQLObjectType` object.

`TypeComposer` has very convenient ways of type creation via `create` method.

### via config
Most recommended way to define your Output type. Such definition provides hoisting problems solution via wrapping types by arrow function. Better developer experience with jumping to the type declarations.
```js
const AuthorTC = TypeComposer.create({
  name: 'Author',
  fields: {
    id: 'Int!',
    firstName: 'String',
    lastName: 'String',
    posts: {
      type: [PostTC],
      args: {
        limit: { type: 'Int', defaultValue: 20 },
        skip: 'Int',
        sort: `enum AuthorPostsSortEnum { ASC DESC }`,
      },
      resolve: () => { ... },
    }
  },
});
```

Also this way of definition provides a lot of syntax sugar for field definition:
```js
const AuthorTC = TypeComposer.create({
  posts: {
    // wrapping Type with arrow function helps to solve a hoisting problem
    // also using type instances provides better DX
    // (ctrl+click allows to jump to PostTC type declaration in your IDE)
    type: () => PostTC,
    description: 'Posts written by Author',
    resolve: (source, args, context, info) => { ... },
  },
  // using standard GraphQL Type
  ucFirstName: {
    type: GraphQLString,
    resolve: (source) => source.firstName.toUpperCase(),
    // also request `firstName` field which must be loaded from database
    projection: { firstName: true },
  },
  // fast way if you need to define only type
  counter: 'Int',
  // using SDL for definition new ObjectType
  complex: `type ComplexType {
    subField1: String
    subField2: Float
    subField3: Boolean
    subField4: ID
    subField5: JSON
    subField6: Date
  }`,
  // SDL for defining array of strings, which is NonNull
  list0: {
    type: '[String]!',
    description: 'Array of strings',
  },
  list1: '[String]',
  list2: ['String'],
  list3: [GraphQLString],
  list4: [`type Complex2Type { f1: Float, f2: Int }`],
});
```

### via SDL
May have hoisting problems. Be aware that all used complex types must be already defined.
```js
const AuthorTC = TypeComposer.create(`
  type Author {
    id: Int!
    firstName: String
    lastName: String
  }
`);
```

### via GraphQLObjectType
This is very useful when you want modify existed `GraphQLObjectType`.
```js
const AuthorType = new GraphQLObjectType(...)
const AuthorTC = TypeComposer.create(AuthorType);
AuthorTC.removeField('lastName');
AuthorTC.getType(); // returns modified GraphQLObjectType
```

### without fields
Useful when you write your own type generators.
```js
import { TypeComposer} from 'graphql-compose';

const AuthorTC = TypeComposer.create('Author');
AuthorTC.addFields({ ... });
```

## Input types via InputTypeComposer

GraphQL allows to pass arguments for fields. You may freely use `Scalar`s, `Enum`s when describing input args. But what you should do in the case of mutations, where you might want to pass in a whole object to be created? For such cases for complex types instead of `GraphQLObjectType` you should use `GraphQLInputObjectType`. They they have small differences in its fields declaration:
- input object type has `defaultValue`
- input object type does not have `args`
- input object type does not have `resolve` method

If you need to create some complex type with several properties, you will need to use `InputTypeComposer`. It's a builder for `GraphQLInputObjectType` object.

`InputTypeComposer` has very convenient ways of type creation via `create` method.

### via config
Most recommended way to define your Input type. Such definition provides hoisting problems solution via wrapping types by arrow function. Better developer experience with jumping to the type declarations.

`InputTypeComposer` has the same type definition capabilities for describing fields as `TypeComposer` - as string, as arrow function, as SDL.

```js
const AuthorITC = InputTypeComposer.create({
  name: 'AuthorInput',
  fields: {
    id: 'Int!',
    firstName: 'String',
    lastName: 'String',
    status: {
      type: 'String',
      defaultValue: 'new',
    }
    address: () => AddressITC,
    location: `input type LonLatInput { lon: Float, lat: Float }`,
  },
});
```

### via existed TypeComposer
You may convert your existed output type to input type.
```js
const AuthorTC = TypeComposer.create({ ... });
const AuthorITC = AuthorTC.getITC(); // returns InputTypeComposer
```

### via SDL
May have hoisting problems. Be aware that all used complex types must be already defined.
```js
const AuthorITC = InputTypeComposer.create(`
  input AuthorInput {
    id: Int!
    firstName: String
    lastName: String
    status: String @default(value: "new")
  }
`);
```

### via GraphQLInputObjectType
This is very useful when you want modify existed `GraphQLInputObjectType`.
```js
const AuthorInput = new GraphQLInputObjectType(...)
const AuthorITC = InputTypeComposer.create(AuthorInput);
AuthorITC.removeField('status');
AuthorITC.getType(); // returns modified GraphQLInputObjectType
```

### without fields
Useful when you write your own type generators.
```js
import { InputTypeComposer} from 'graphql-compose';

const AuthorITC = InputTypeComposer.create('AuthorInput');
AuthorITC.addFields({ ... });
```

## Enum types via EnumTypeComposer
If you need to create enum type, you will need to use `EnumTypeComposer`. It's a builder for `GraphQLEnumType` object.

`EnumTypeComposer` has very convenient ways of type creation via `create` method.

### via config
Most recommended way to define your Enum type. Such definition provides to set own values for every key.

```js
const StatusETC = EnumTypeComposer.create({
  name: 'StatusEnum',
  values: {
    NEW: { value: 0 },
    APPROVED: { value: 1 },
    DECLINED: { value: 2 },
  },
});
```

### via SDL
```js
const StatusETC = EnumTypeComposer.create(`
  enum StatusEnum { NEW APPROVED DECLINED }
`);
```

### via GraphQLEnumType
This is very useful when you want modify existed `GraphQLEnumType`.
```js
const StatusEnum = new GraphQLEnumType(...)
const StatusETC = InputTypeComposer.create(StatusEnum);
StatusETC.removeField('NEW');
StatusETC.getType(); // returns modified GraphQLEnumType
```

### without fields
Useful when you write your own type generators.
```js
import { EnumTypeComposer} from 'graphql-compose';

const StatusETC = EnumTypeComposer.create('StatusEnum');
StatusETC.addFields({ ... });
```

## Lists
If you want indicate that field or argument return an array of some type, you may do the following:
```js
import { GraphQLList } from 'graphql';

SomeTypeComposer.addFields({
  field1: [AuthorTC], // RECOMMENDED just wrap in the regular js array
  field2: AuthorTC.getTypePlural(), // call specific TypeComposer method
  field3: '[Author]', // use SDL format
  field4: new GraphQLList(AuthorTC.getType()) // use standard GraphQLList
});
```

## Non-Null
If you want indicate that field is not empty or argument is required:
```js
import { GraphQLNonNull } from 'graphql';

SomeTypeComposer.addFields({
  // field1: ???, // doesn't exists any regular object in js for expressing NonNull value
  field2: AuthorTC.getTypeNonNull(), // call specific TypeComposer method
  field3: 'Author!', // use SDL format
  field4: new GraphQLNonNull(AuthorTC.getType()) // use standard GraphQLNonNull
});
```

Non-Null List of Non-Null values may be expressed in following way:
```js
import { GraphQLNonNull, GraphQLList } from 'graphql';

SomeTypeComposer.addFields({
  field3: '[Author!]!', // use SDL format
  field4: new GraphQLNonNull( // use standard GraphQLNonNull & GraphQLList
    new GraphQLList(
      new GraphQLNonNull(AuthorTC.getType())
    )
  )
});
```

## Union types
Graphql-compose does not provide any helper for `Union` types. You should use standard `GraphQLUnionType`.

```js
import { GraphQLUnionType } from 'graphql';

// Get GraphQLObjectType from TypeComposer instance
const DogType = DogTC.getType();
const CatType = CatTC.getType();

const PetType = new GraphQLUnionType({
  name: 'Pet',
  types: [ DogType, CatType ],
  resolveType(value) {
    if (value instanceof Dog) {
      return DogType;
    }
    if (value instanceof Cat) {
      return CatType;
    }
  }
});

// You may use GraphQLUnionType for field definition in TypeComposer
AuthorTC.addFields({
  favoritePet: PetType,
});
```

## Interfaces
Graphql-compose does not provide any helper for `Interfaces`. You should use standard `GraphQLInterfaceType`.
```js
import { GraphQLInterfaceType } from 'graphql';
import { schemaComposer, GraphQLDate, GraphQLJSON } from 'graphql-compose';

const TimestampInterface = new GraphQLInterfaceType({
  name: 'Timestampable',
  description: 'An object with createdAt and updatedAt fields',
  resolveType: (value: any, info?: GraphQLResolveInfo) => {
    const typeName = ... somehow obtained from `value` or `info`
    // use schemaComposer for searching Type by its name
    if (schemaComposer.has(typeName)) {
      return schemaComposer.getTC(typeName).getType();
    }
    // as fallback return JSON type (type of any shape)
    return GraphQLJSON;
  },
  // wrapped by arrow function for solving hoisting problems
  fields: () => ({
    // be aware fieldConfigs must be in standard GraphQL format
    // no shortened format available here
    createdAt: {
      type: GraphQLDate,
    },
    updatedAt: {
      type: GraphQLDate,
    },
  }),
});
```
