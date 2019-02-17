import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faFacebook, faLinkedin } from '@fortawesome/fontawesome-free-brands'
import { fas, faEdit,facontact, faArrowUp, faHeart, faLongArrowAltLeft, faGripLines, faTimes } from '@fortawesome/free-solid-svg-icons'

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(fas,faGithub,faFacebook,faLinkedin,faArrowUp,faLongArrowAltLeft, faHeart,faGripLines,faTimes)

// Register the component globally
Vue.component('font-awesome-icon', FontAwesomeIcon)