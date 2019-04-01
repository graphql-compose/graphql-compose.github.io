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
