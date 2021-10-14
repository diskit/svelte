<script lang="ts">

  import logo from './assets/svelte.png'
  import Counter from './component/Counter.svelte'  

  console.log(import.meta.env.VITE_API_HOST);
  
</script>

<main>
  <div>
    <img src={logo} alt="Svelte Logo" />
  </div>

  <Counter />
</main>

<style lang="scss">

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  img {
    height: 16rem;
    width: 16rem;
  }
</style>
