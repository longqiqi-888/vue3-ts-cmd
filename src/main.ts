import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerApp } from './global'
// import ElementPlus from 'element-plus'

const app = createApp(App)
registerApp(app)
// app.component(ElButton.name, ElButton)
app.use(router)
app.use(store)
// app.use(ElementPlus)
app.mount('#app')
