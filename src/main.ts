import "reflect-metadata";
import App from './App.svelte'
import './container';

const app = new App({
  target: document.getElementById('app')
})

export default app
