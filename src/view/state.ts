import { writable } from "svelte/store";

export class ViewState {
  count = writable(0);
}

export type Task = {
  title: string;
  memo?: string;
}

export class TaskViewState {
  tasks = writable<Task[]>();
}