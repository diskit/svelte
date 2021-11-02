<script lang="ts">
  import { Usecase } from "app/usecase/usecase"

  import { container } from "tsyringe"
  import type { ViewState } from "../state"

  const usecase = container.resolve(Usecase)
  const state = container.resolve<ViewState>("ViewState")

  let count = state.count

  const increment = () => {
    usecase.increment()
  }

  $: {
    console.log($count)
  }

  $: description = `${$count} clicked`
</script>

<button on:click="{increment}">
  Clicks: {$count}
</button>

<div>{description}</div>

<style>
  button {
    font-family: inherit;
    font-size: inherit;
    padding: 1em 2em;
    color: #ff3e00;
    background-color: rgba(255, 62, 0, 0.1);
    border-radius: 2em;
    border: 2px solid rgba(255, 62, 0, 0);
    outline: none;
    width: 200px;
    font-variant-numeric: tabular-nums;
    cursor: pointer;
  }

  button:focus {
    border: 2px solid #ff3e00;
  }

  button:active {
    background-color: rgba(255, 62, 0, 0.2);
  }
</style>
