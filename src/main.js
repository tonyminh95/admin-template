import Vue from 'vue'
import App from './App.vue'
import '@/assets/styles/index.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { faUser, faHeart, faCompass, faComment, faPaperPlane, faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add([ faEllipsisH, faUser, faHeart, faCompass, faComment, faPaperPlane, faBookmark, faInstagram ])
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')