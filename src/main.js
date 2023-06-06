import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js"
import axios from 'axios'
import './assets/main.css'

window.axios=axios

const app = createApp(App)

app.use(bootstrap)

app.use(router)

app.mount('#app')
