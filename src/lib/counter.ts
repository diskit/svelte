import { writable } from "svelte/store";
import { inject, injectable, singleton } from "tsyringe";


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

export interface InputPort {
  find(): Count
  store(count: Count) 
}

export interface OutputPort {
  setCount(count: Count)
}


export class Storage {
  private count = 0;

  get() { return this.count }
  save(value: number) { this.count = value }
}
@singleton()
export class Gateway implements InputPort {

  constructor(@inject("Storage") readonly storage: Storage) {}

  find(): Count {
    return new Count(this.storage.get());
  }

  store(count: Count) {
    this.storage.save(count.value);
  }
}

export class Count {
  constructor(readonly value: number) {}

  increment(): Count {
    return new Count(this.value + 1);
  }
}

@singleton()
export class Presenter implements OutputPort {

  constructor(@inject("ViewState") readonly viewState: ViewState) {}

  setCount(count: Count) {
    this.viewState.count.set(count.value);
  }
}

export class ViewState {
  count = writable(0);
}