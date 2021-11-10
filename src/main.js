import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import VueResource from 'vue-resource'
// var VueResource = require('vue-resource')

createApp(App).use(store).use(router).use(VueAxios, axios).mount('#app')
