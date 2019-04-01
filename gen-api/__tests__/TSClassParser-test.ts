import TSClassParser from '../TSClassParser';

describe('TSClassParser', () => {
  it('should parse static methods', () => {
    const data = TSClassParser.parseSource(`
      import { GraphQLFieldConfig } from 'graphql';

      class Me {
        static pub(a: Me): string;
        /**
         * Method description
         * 
         * @example
         * const a = Me.prot('a', {});
         * 
         * console.log(a);
         * 
         * @description Desc1
         * New description Line
         * 
         * @example
         * const a = 1 + 1;
         * const b = 2 + 2;
         * 
         * @param c Some arg description
         */
        protected static prot(b: string, c: GraphQLFieldConfig<any, any>): number;
        private static priv(): {};
        static gen<T = any>(a: T): T;
      }
    `);

    expect(data.classData.name).toBe('Me');
    expect(data.classData.staticMethods).toEqual([
      {
        documentation: '',
        flags: { static: true },
        name: 'pub',
        parameters: [{ documentation: '', name: 'a', type: 'Me', typeChecker: 'Me' }],
        type: 'string',
        typeChecker: '(a: Me) => string',
      },
      {
        documentation:
          "Method description\n\n```js\nconst a = Me.prot('a', {});\n\nconsole.log(a);\n```\n\nDesc1\nNew description Line\n\n\n```js\nconst a = 1 + 1;\nconst b = 2 + 2;\n```\n",
        flags: { protected: true, static: true },
        name: 'prot',
        parameters: [
          { documentation: '', name: 'b', type: 'string', typeChecker: 'string' },
          {
            documentation: 'Some arg description',
            name: 'c',
            type: 'GraphQLFieldConfig<any, any>',
            typeChecker: 'any',
          },
        ],
        type: 'number',
        typeChecker: '(b: string, c: any) => number',
      },
      {
        documentation: '',
        flags: { private: true, static: true },
        name: 'priv',
        parameters: [],
        type: '{}',
        typeChecker: '() => {}',
      },
      {
        documentation: '',
        flags: { static: true },
        generics: '<T = any>',
        name: 'gen',
        parameters: [{ documentation: '', name: 'a', type: 'T', typeChecker: 'T' }],
        type: 'T',
        typeChecker: '<T = any>(a: T) => T',
      },
    ]);
  });

  it('should parse static properties', () => {
    const data = TSClassParser.parseSource(`
      class Me {
        static pub: string;
        protected static prot: Me;
        private static priv: He;
      }
    `);

    expect(data.classData.name).toBe('Me');
    expect(data.classData.staticProperties).toEqual([
      {
        documentation: '',
        flags: { static: true },
        name: 'pub',
        type: 'string',
        typeChecker: 'string',
      },
      {
        documentation: '',
        flags: { protected: true, static: true },
        name: 'prot',
        type: 'Me',
        typeChecker: 'Me',
      },
      {
        documentation: '',
        flags: { private: true, static: true },
        name: 'priv',
        type: 'He',
        typeChecker: 'any',
      },
    ]);
  });

  it('should parse instance methods', () => {
    const data = TSClassParser.parseSource(`
      class Me {
        pub(a: Me): string;
        /**
         * Method description
         * 
         * @param c Some arg description
         */
        protected prot(b: string, c: string): number;
        private priv(): {};
      }
    `);

    expect(data.classData.name).toBe('Me');
    expect(data.classData.methods).toEqual([
      {
        documentation: '',
        flags: {},
        name: 'pub',
        parameters: [{ documentation: '', name: 'a', type: 'Me', typeChecker: 'Me' }],
        type: 'string',
        typeChecker: '(a: Me) => string',
      },
      {
        documentation: 'Method description',
        flags: { protected: true },
        name: 'prot',
        parameters: [
          { documentation: '', name: 'b', type: 'string', typeChecker: 'string' },
          {
            documentation: 'Some arg description',
            name: 'c',
            type: 'string',
            typeChecker: 'string',
          },
        ],
        type: 'number',
        typeChecker: '(b: string, c: string) => number',
      },
      {
        documentation: '',
        flags: { private: true },
        name: 'priv',
        parameters: [],
        type: '{}',
        typeChecker: '() => {}',
      },
    ]);
  });

  it('should parse instance props', () => {
    const data = TSClassParser.parseSource(`
      class Me {
        pub: string;
        /**
         * My number
         */
        protected prot: number;
        private priv: {};
      }
    `);

    expect(data.classData.name).toBe('Me');
    expect(data.classData.properties).toEqual([
      { documentation: '', flags: {}, name: 'pub', type: 'string', typeChecker: 'string' },
      {
        documentation: 'My number',
        flags: { protected: true },
        name: 'prot',
        type: 'number',
        typeChecker: 'number',
      },
      { documentation: '', flags: { private: true }, name: 'priv', type: '{}', typeChecker: '{}' },
    ]);
  });

  it('should parse constructors', () => {
    const data = TSClassParser.parseSource(`
      class Me {
        /**
         * Class constructor with debug
         **/
        constructor(debug: boolean)

        /**
         * Class constructor with options
         **/
        constructor(opts: {}, debug: boolean)
      }
    `);

    expect(data.classData.name).toBe('Me');
    expect(data.classData.constructors).toEqual([
      {
        documentation: 'Class constructor with debug',
        parameters: [{ documentation: '', name: 'debug', type: 'boolean', typeChecker: 'boolean' }],
        type: 'Me',
      },
      {
        documentation: 'Class constructor with options',
        parameters: [
          { documentation: '', name: 'opts', type: '{}', typeChecker: '{}' },
          { documentation: '', name: 'debug', type: 'boolean', typeChecker: 'boolean' },
        ],
        type: 'Me',
      },
    ]);
  });

  it('should parse interfaces', () => {
    const data = TSClassParser.parseSource(`
      export interface ComposeEnumTypeConfig extends GraphQLEnumTypeConfig {
        extensions?: Extensions;
      };
      
      export type EnumTypeComposeDefinition = TypeAsString | ComposeEnumTypeConfig | GraphQLEnumType;
      
      export type GraphQLEnumTypeExtended<T> = GraphQLEnumType & {
        _gqcExtensions?: Extensions<T>;
      };

      class Me {
        constructor(debug: boolean)
      }
    `);

    expect(data.classData.name).toBe('Me');
    expect(data.interfaces).toMatchInlineSnapshot(`
Array [
  Object {
    "code": "
      export interface ComposeEnumTypeConfig extends GraphQLEnumTypeConfig {
        extensions?: Extensions;
      }",
    "name": " ComposeEnumTypeConfig",
  },
  Object {
    "code": "
      
      export type EnumTypeComposeDefinition = TypeAsString | ComposeEnumTypeConfig | GraphQLEnumType;",
    "name": " EnumTypeComposeDefinition",
  },
  Object {
    "code": "
      
      export type GraphQLEnumTypeExtended<T> = GraphQLEnumType & {
        _gqcExtensions?: Extensions<T>;
      };",
    "name": " GraphQLEnumTypeExtended",
  },
]
`);
  });
});
