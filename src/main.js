import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
const app = createApp(App)
//inport Anzeigeinhalt from '/.Anzeigeinhalt.vue'
app.use(router)
app.mount('#app')