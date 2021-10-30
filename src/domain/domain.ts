export class Count {
  constructor(readonly value: number) {}

  increment(): Count {
    return new Count(this.value + 1);
  }
}