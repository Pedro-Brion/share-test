import { createApp } from 'vue'
import { createHead } from '@unhead/vue/client'
import './style.css'
import App from './App.vue'

const app = createApp(App)
const head = createHead({
 init: [
  {
   htmlAttrs: { lang: "pt-br" },
   title: 'Default title',
  },
 ]
})

app.use(head)
app.mount('#app')
