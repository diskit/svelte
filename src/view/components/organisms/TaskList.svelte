<script lang="ts">
import type { Task } from "app/view/state";
import TaskListItem from "../molecules/TaskListItem.svelte";


  export let tasks: Task[] = [];
</script>

<div>
  {#each tasks as task}
    <TaskListItem {task}></TaskListItem>
  {/each}
</div>

