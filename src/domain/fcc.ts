export abstract class FCC<T> {
  constructor(readonly values: T[]) {}

  map<R>(f: (value: T) => R): R[] {
    return this.values.map(f);
  }
}