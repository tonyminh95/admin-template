import Vue from 'vue'
import App from './App.vue'
import '@/assets/styles/index.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faHeart, faCompass } from '@fortawesome/free-regular-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add([ faUser, faHeart, faCompass, faInstagram ])
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')