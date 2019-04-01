import prettier from 'prettier';

export function trim(s: string): string {
  // trim spaces in front and back
  s = s.replace(/^\s+|\s+$/g, '');

  // trim triple new lines
  s = s.replace(/(\s*\n){3,}/g, '\n\n');

  return s;
}

export function fixJSDocCode(s: string): string {
  s = s.replace(/\n\s*\*\s/g, '\n');

  return s;
}

export function prettify(code: string): string {
  try {
    return prettier.format(code, {
      parser: 'typescript',
      semi: true,
      singleQuote: true,
      arrowParens: 'always',
    });
  } catch (e) {
    console.log(e.message);
    return code;
  }
}

export function prettifyReturnType(code: string): string {
  const pretty = prettify(`type __STUB__ = ${code}`);
  return pretty.replace(/type __STUB__ =/, '').replace(/;\n$/, '');
}
