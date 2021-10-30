import type { Count } from "app/domain/domain";
import type { OutputPort } from "app/usecase/port";
import { ViewState } from "app/view/state";
import { inject, singleton } from "tsyringe";

@singleton()
export class Presenter implements OutputPort {

  constructor(@inject("ViewState") readonly viewState: ViewState) {}

  setCount(count: Count) {
    this.viewState.count.set(count.value);
  }
}