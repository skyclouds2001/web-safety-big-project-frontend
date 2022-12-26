const storage: Storage = window.localStorage

const transform = (v: unknown): string => {
  switch (typeof v) {
    case 'string':
      return v
    case 'number':
    case 'boolean':
      return String(v)
    case 'object':
      return v !== null ? JSON.stringify(v) : ''
    case 'function':
    case 'bigint':
    case 'symbol':
      return v.toString()
    case 'undefined':
      return ''
    default:
      return ''
  }
}

const reTransform = (v: string | null): any => {
  return v !== null ? JSON.parse(v) : v
}

export default {
  get: (key: string): string | null => {
    return reTransform(storage.getItem(key))
  },
  set: (key: string, value: unknown): void => {
    storage.setItem(key, transform(value))
  },
  remove: (key: string): void => {
    storage.removeItem(key)
  },
}
