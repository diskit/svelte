import type { Count } from "app/domain/domain";

export interface InputPort {
  find(): Count
  store(count: Count) 
}

export interface OutputPort {
  setCount(count: Count)
}
