import stringifyObject from 'stringify-object';

const humanReadable = function (value: any): string {
  if (typeof value === 'number') {
    return `${value}`;
  }

  if (typeof value === 'boolean') {
    return `${value}`;
  }

  if (typeof value === 'string') {
    return `'${value}'`;
  }

  if (typeof value === 'object') {
    if (value === null) {
      return 'null';
    }

    if (value instanceof Error) {
      return `'Error'`;
    }

    if (value instanceof RegExp) {
      return value.toString();
    }

    return stringifyObject(value, {
      indent: '  ',
      singleQuotes: true
    });
  }

  if (typeof value === 'function') {
    return value.name ? value.name : '(anonymous)';
  }

  if (typeof value === 'undefined') {
    return 'undefined';
  }

  throw new Error(`Unsupported type '${typeof value}'.`);
};

export default humanReadable;
