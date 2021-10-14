import "reflect-metadata";
// https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/faq.md#where-should-i-put-my-global-styles
import './global.scss';
import './container';

import App from './view/App.svelte'


const app = new App({
  target: document.getElementById('app')
})

export default app
