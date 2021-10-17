function isNumber()
{
  return typeof value === 'number'
}

function isString(value)
{
  return typeof value === 'string'
}

function isBoolean(value)
{
  return typeof value === 'boolean'
}

function isNull(value)
{
  return value === null
}

function isFunction(value)
{ 
  return typeof value === 'function'
}

function isArray(value)
{
  return Array.isArray(value)
}

export default {
  isNumber,
  isString,
  isBoolean,
  isNull,
  isFunction,
  isArray,
}


