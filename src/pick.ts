import { ObjectOrClassInstance } from './types/object-or-class-instance'

/**
 * @example pick({ a: 1, b: 2, c: 3 }, ["a", "b"]) // { a: 1, b: 2 }
 */
export function pick<T extends ObjectOrClassInstance, K extends keyof T>(
  object: T,
  keys: readonly K[]
): Pick<T, K> {
  const result = {} as Pick<T, K>
  for (const key of keys) {
    result[key] = object[key]
  }
  return result
}
