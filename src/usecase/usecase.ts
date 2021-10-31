import { inject, injectable, singleton } from "tsyringe";
import type { InputPort, OutputPort, TaskOutputPort, TaskInputPort } from "./port";

@singleton()
export class Usecase {
  constructor(@inject("inputPort") private readonly inputPort: InputPort, @inject("outputPort") private readonly outputPort: OutputPort) { }

  increment() {
    const count = this.inputPort.find();
    const incremented = count.increment()
    this.outputPort.setCount(incremented);
    this.inputPort.store(incremented);
  }
}

@singleton()
export class TaskUsecase {

  constructor(
    @inject("taskPort") readonly taskPort: TaskInputPort,
    @inject("taskOutputPort") readonly taskOutputPort: TaskOutputPort) { }

  async load(): Promise<void> {
    this.taskOutputPort.apply(this.taskPort.findAll());
  }
}