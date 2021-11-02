<script lang="ts">
  import type { Task } from "app/view/state"

  export let task: Task
</script>

<div>{task.title}</div>
{task.memo}
