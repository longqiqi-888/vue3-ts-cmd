import { App } from 'vue'
import registerElement from './register-element'

export function registerApp(app: App): void {
  // registerElement(app)
  app.use(registerElement)
  // ......注册其他东西
}
