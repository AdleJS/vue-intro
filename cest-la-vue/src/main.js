import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from '../router'

const app = createApp(App)
const router = createRouter({ history: createWebHashHistory(), routes: routes })

app.use(router)
app.mount('#app')
