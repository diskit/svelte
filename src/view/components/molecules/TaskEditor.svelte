<script lang="ts">
import { createEventDispatcher } from "svelte";


  let memo = '';
  let title = '';

  const dispatcher = createEventDispatcher();

  const onClick = () => {
    dispatcher('create', {
      title: title,
      memo: memo
    })
  }
</script>

<div class="editor">
  <input type="text" placeholder="タイトルを入力" bind:value={title}>
  <input type="text" placeholder="メモを入力" bind:value={memo}>
  <button on:click="{onClick}">save</button>
</div>

<style lang="scss">
.editor {
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 4px;
  width: 800px;
  margin: auto;
}

input {
  height: 32px;
  border: 0;
  font-size: 12px;
  border-radius: 4px;
  padding: 4px 8px;
  outline: none;

  &::placeholder {
    font-size: 10px;
  }
}

button {
  align-self: flex-end;
}
</style>