import type { Count } from "../domain/domain";
import type { OutputPort } from "../usecase/port";
import { ViewState } from "../view/state";
import { inject, singleton } from "tsyringe";

@singleton()
export class Presenter implements OutputPort {

  constructor(@inject("ViewState") readonly viewState: ViewState) {}

  setCount(count: Count) {
    this.viewState.count.set(count.value);
  }
}