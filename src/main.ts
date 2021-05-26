import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import initSvgIcon from '@/icons/index'
// element-plus
import installElementPlus from './plugins/element'

import { ElMessageBox, ElMessage, ElNotification } from 'element-plus'
// 初始化css
import 'normalize.css/normalize.css'
// 全局 css
import '@/styles/index.scss'
const app = createApp(App)

app.use(store).use(router).use(installElementPlus).use(initSvgIcon).mount('#app')
// vue实例上挂载属性类型声明
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $message: typeof ElMessage;
    $notify: typeof ElNotification;
    $confirm: typeof ElMessageBox.confirm;
    $alert: typeof ElMessageBox.alert;
    $prompt: typeof ElMessageBox.prompt;
  }
}
