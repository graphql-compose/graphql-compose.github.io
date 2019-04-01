/**
 * This is TypeStorage class
 * Helps to create any type
 * [Go TO](http://graphql.org)
 */
export class TypeStorage<K, V> {
  public types: Map<K, V>;
  public readonly size: number;
  protected prot: number;
  private priv: number;

  public static findMany(q: any): string[];
  public static statProperty: boolean;

  public constructor(test: boolean);

  public clear(): void;

  public delete(key: K): boolean;

  public entries(): Iterator<[K, V]>;

  public forEach(callbackfn: (value: V, index: K, map: Map<K, V>) => any, thisArg?: any): void;

  public get(key: K): V;

  public has(key: K): boolean;

  public keys(): Iterator<K>;

  /**
   * Set value to storage
   */
  public set(key: K, value: V): this;

  public values(): Iterator<V>;

  public add(value: V): string | null;

  /**
   * -----------------------------------------------
   * Custom methods
   * -----------------------------------------------
   **/

  /**
   * Ok
   * @param key
   * @param ClassObj
   */
  public hasInstance(key: K, ClassObj: any): boolean;

  public getOrSet(key: K, typeOrThunk: V | (() => V)): V;
}
