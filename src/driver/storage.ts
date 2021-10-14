export class Storage {
  private count = 0;

  get() { return this.count }
  save(value: number) { this.count = value }
}