import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import './assets/main.css'

import WujieVue from "wujie-vue3";

import hostMap from './hostMap';
import credentialsFetch from "./fetch";
import lifecycles from "./lifecycle";

const { bus, setupApp, preloadApp, destroyApp } = WujieVue;

const isProduction = process.env.NODE_ENV === "production";
const attrs = isProduction ? { src: hostMap("//localhost:7700/") } : {};
const degrade = window.localStorage.getItem("degrade") === "true" || !window.Proxy || !window.CustomElementRegistry;
const props = {
  jump: (name) => {
    router.push({ name });
  },
}
setupApp({
  name: "react-demo",
  url: hostMap("//localhost:7710/"),
  attrs,
  exec: true,
  props,
  fetch: credentialsFetch,
  degrade,
  ...lifecycles,
});
setupApp({
  name: "vue-demo",
  url: hostMap("//localhost:7720/"),
  attrs,
  exec: true,
  props,
  fetch: credentialsFetch,
  degrade,
  ...lifecycles,
});

createApp(App)
.use(router)
.use(WujieVue)
.mount('#app')
