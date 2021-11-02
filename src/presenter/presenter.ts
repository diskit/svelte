import type { Count } from "app/domain/domain"
import type { Tasks } from "app/domain/task"
import type { OutputPort, TaskOutputPort } from "app/usecase/port"
import { TaskViewState, ViewState } from "app/view/state"
import { inject, singleton } from "tsyringe"

@singleton()
export class Presenter implements OutputPort {
  constructor(@inject("ViewState") readonly viewState: ViewState) {}

  setCount(count: Count) {
    this.viewState.count.set(count.value)
  }
}

@singleton()
export class TaskPresenter implements TaskOutputPort {
  constructor(@inject("taskViewState") readonly state: TaskViewState) {}

  apply(tasks: Tasks) {
    this.state.tasks.set(tasks.map((v) => ({ title: v.title, memo: v.memo })))
  }
}
