import 'element-plus/dist/index.css'
// import 'element-plus/theme-chalk/el-button.css'
import { ElButton, ElForm, ElInput, ElRadio } from 'element-plus'
const components = [ElButton, ElForm, ElInput, ElRadio]

export default function (app: App): void {
  for (const component of components) {
    // app.component(ElButton.name, ElButton)
    app.component(component.name, component)
  }
}
