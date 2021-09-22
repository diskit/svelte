import { injectable } from "tsyringe";

@injectable()
export class Counter {

  private value = 0;

  count() {
    this.value++;
    return this.value;
  }
}