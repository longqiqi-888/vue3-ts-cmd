import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerApp } from './global'
// import ElementPlus from 'element-plus'

const app = createApp(App)

// registerApp(app)
// 用use注册的方式
// app.use(function(app:App)){

// }
// app.use({
//   install:function(app:App){

//   }
// })
app.use(registerApp)
app.use(router)
app.use(store)
// app.use(ElementPlus)
app.mount('#app')
