import type { Count } from "app/domain/domain";
import type { Tasks } from "app/domain/task";

export interface InputPort {
  find(): Count
  store(count: Count) 
}

export interface OutputPort {
  setCount(count: Count)
}

export interface TaskInputPort {
  findAll(): Tasks
}

export interface TaskOutputPort {
  apply(tasks: Tasks)
}