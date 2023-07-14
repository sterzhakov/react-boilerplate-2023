export type Store<T> = {
  [key: string]: T
}

export default class MemoryStorage<T> {
  store: Store<T> = {};

  set(key: string, value: T): T {
    return this.store[key] = value;
  }

  get(key: string): T {
    return this.store[key];
  }
}
