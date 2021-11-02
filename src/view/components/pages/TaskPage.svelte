<script lang="ts">
  import { writable } from "svelte/store"
  import type { Task, TaskViewState } from "app/view/state"
  import TaskList from "components/organisms/TaskList.svelte"
  import { container } from "tsyringe"
  import { TaskUsecase } from "app/usecase/usecase"
  import TaskEditor from "../molecules/TaskEditor.svelte"

  const usecase = container.resolve(TaskUsecase)
  const state = container.resolve<TaskViewState>("taskViewState")

  let tasks = state.tasks
  usecase.load()

  const onCreate = (e) => {
    console.log(e.detail)
  }
</script>

<div>
  <TaskEditor on:create="{onCreate}" />
  <TaskList tasks="{$tasks}" />
</div>

<style lang="scss">
</style>
