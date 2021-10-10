import "reflect-metadata";
import App from './App.svelte'
import './container';
// https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/faq.md#where-should-i-put-my-global-styles
import './global.scss';

const app = new App({
  target: document.getElementById('app')
})

export default app
