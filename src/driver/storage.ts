import { singleton } from "tsyringe"

export class Storage {
  private count = 0

  get() {
    return this.count
  }
  save(value: number) {
    this.count = value
  }
}

export class TaskStorage {
  private tasks: { title: string; memo: string }[] = [{ title: "a", memo: "b" }]

  getAll(): { title: string; memo: string }[] {
    return this.tasks.concat([])
  }
}
