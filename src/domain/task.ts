import { FCC } from "./fcc"

export class Task {
  constructor(readonly title: string, readonly memo: string) {}
}

export class Tasks extends FCC<Task> {}
