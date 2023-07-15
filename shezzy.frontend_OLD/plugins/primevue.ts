import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Menubar from 'primevue/menubar'
import Menu from 'primevue/menu'
import Panel from 'primevue/panel'
import Card from 'primevue/card'
import Avatar from 'primevue/avatar';
import Image from 'primevue/image'
import ScrollPanel from 'primevue/scrollpanel'
import Steps from 'primevue/steps'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import Divider from 'primevue/divider'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true })
  nuxtApp.vueApp.use(ToastService)
  nuxtApp.vueApp.component('Button', Button)
  nuxtApp.vueApp.component('Menubar', Menubar)
  nuxtApp.vueApp.component('Menu', Menu)
  nuxtApp.vueApp.component('Panel', Panel)
  nuxtApp.vueApp.component('Card', Card)
  nuxtApp.vueApp.component('Avatar', Avatar)
  nuxtApp.vueApp.component('Image', Image)
  nuxtApp.vueApp.component('ScrollPanel', ScrollPanel)
  nuxtApp.vueApp.component('Steps', Steps)
  nuxtApp.vueApp.component('Toast', Toast)
  nuxtApp.vueApp.component('Divider', Divider)
  //other components that you need
})
