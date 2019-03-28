import TSClassParser from '../../TSClassParser';

it('check TypeStorage.d.ts', () => {
  expect(TSClassParser.parseFile('api-gen/__tests__/fixtures/TypeStorage.d.ts')).toMatchInlineSnapshot(`
Object {
  "constructors": Array [
    Object {
      "documentation": "",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "test",
          "type": "boolean",
        },
      ],
      "type": "TypeStorage<K, V>",
    },
  ],
  "documentation": "This is TypeStorage class
Helps to create any type
[Go TO](http://graphql.org)",
  "methods": Array [
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "clear",
      "parameters": Array [],
      "type": "void",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "delete",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "key",
          "type": "K",
        },
      ],
      "type": "boolean",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "entries",
      "parameters": Array [],
      "type": "Iterator<[K, V]>",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "forEach",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "callbackfn",
          "type": "(value: V, index: K, map: Map<K, V>) => any",
        },
        Object {
          "documentation": "",
          "name": "thisArg",
          "type": "any",
        },
      ],
      "type": "void",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "get",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "key",
          "type": "K",
        },
      ],
      "type": "V",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "has",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "key",
          "type": "K",
        },
      ],
      "type": "boolean",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "keys",
      "parameters": Array [],
      "type": "Iterator<K>",
    },
    Object {
      "documentation": "Set value to storage",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "set",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "key",
          "type": "K",
        },
        Object {
          "documentation": "",
          "name": "value",
          "type": "V",
        },
      ],
      "type": "this",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "values",
      "parameters": Array [],
      "type": "Iterator<V>",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "add",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "value",
          "type": "V",
        },
      ],
      "type": "string",
    },
    Object {
      "documentation": "-----------------------------------------------
Custom methods
-----------------------------------------------
Ok",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "hasInstance",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "key",
          "type": "K",
        },
        Object {
          "documentation": "",
          "name": "ClassObj",
          "type": "any",
        },
      ],
      "type": "boolean",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "getOrSet",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "key",
          "type": "K",
        },
        Object {
          "documentation": "",
          "name": "typeOrThunk",
          "type": "V | (() => V)",
        },
      ],
      "type": "V",
    },
  ],
  "name": "TypeStorage",
  "properties": Array [
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "types",
      "type": "Map<K, V>",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": true,
      },
      "name": "size",
      "type": "number",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": true,
        "readonly": false,
      },
      "name": "prot",
      "type": "number",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": true,
        "protected": false,
        "readonly": false,
      },
      "name": "priv",
      "type": "number",
    },
  ],
  "staticMethods": Array [
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "findMany",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "q",
          "type": "any",
        },
      ],
      "type": "string[]",
    },
  ],
  "staticProperties": Array [
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "statProperty",
      "type": "boolean",
    },
  ],
  "type": "typeof TypeStorage",
}
`);
});
