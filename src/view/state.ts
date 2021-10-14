import { writable } from "svelte/store";

export class ViewState {
  count = writable(0);
}