import { inject, injectable, singleton } from "tsyringe";
import type { InputPort, OutputPort } from "./port";

@singleton()
export class Usecase {
  constructor(@inject("inputPort") private readonly inputPort: InputPort, @inject("outputPort") private readonly outputPort: OutputPort) {}

  increment() {
    const count = this.inputPort.find();
    const incremented = count.increment()
    this.outputPort.setCount(incremented);
    this.inputPort.store(incremented);
  }
}