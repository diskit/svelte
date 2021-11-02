import { Count } from "app/domain/domain"
import { Task, Tasks } from "app/domain/task"
import type { TaskStorage } from "app/driver/storage"
import type { InputPort, TaskInputPort } from "app/usecase/port"
import { inject, singleton } from "tsyringe"

@singleton()
export class Gateway implements InputPort {
  constructor(@inject("Storage") readonly storage: Storage) {}

  find(): Count {
    return new Count(this.storage.get())
  }

  store(count: Count) {
    this.storage.save(count.value)
  }
}

@singleton()
export class TaskGateway implements TaskInputPort {
  constructor(@inject("taskStorage") readonly storage: TaskStorage) {}

  findAll(): Tasks {
    const values = this.storage.getAll().map((v) => new Task(v.title, v.memo))
    return new Tasks(values)
  }
}
