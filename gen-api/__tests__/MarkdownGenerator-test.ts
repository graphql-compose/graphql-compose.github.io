import MarkdownGenerator from '../MarkdownGenerator';

describe('MarkdownGenerator', () => {
  it('static createMethodCodeSnippet()', () => {
    const method = {
      documentation: 'Method description',
      flags: { private: false, protected: true, readonly: false, static: true },
      name: 'prot',
      parameters: [
        { documentation: '', name: 'b', type: 'string', typeChecker: 'string' },
        {
          documentation: 'Some arg \ndescription',
          name: 'c',
          type: 'string',
          typeChecker: 'string',
        },
      ],
      type: 'number',
      typeChecker: 'number',
    };

    expect(MarkdownGenerator.createMethodCodeSnippet(method)).toMatchInlineSnapshot(`
"\`\`\`js
static protected prot(
  b: string,

  // Some arg 
  // description
  c: string
): number
\`\`\`
"
`);
  });

  it('static createPropertyCodeSnippet()', () => {
    const property = {
      documentation: '',
      flags: { private: false, protected: true, readonly: false, static: true },
      name: 'prot',
      type: 'Me',
      typeChecker: 'Me',
    };

    expect(MarkdownGenerator.createPropertyCodeSnippet(property)).toMatchInlineSnapshot(`
"\`\`\`js
static protected prot: Me;
\`\`\`
"
`);
  });

  it('static obtainMethodSection()', () => {
    const data = MarkdownGenerator.parseSectionAndDocs(
      `-----------------------------------------------
    Custom methods   

You may use custom methods
or write your own.
-----------------------------------------------

Ok
Second line!!!

`,
      'My methods'
    );

    expect(data.documentation).toEqual('Ok\nSecond line!!!');
    expect(data.section).toEqual('Custom methods');
    expect(data.sectionDoc).toEqual('You may use custom methods\nor write your own.');

    const data2 = MarkdownGenerator.parseSectionAndDocs('  Some docs  ', 'My methods');
    expect(data2.documentation).toEqual('Some docs');
    expect(data2.section).toEqual('My methods');
  });
});
