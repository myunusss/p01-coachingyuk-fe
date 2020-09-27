import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBell, faComments, faCheckCircle, faPhone, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faComment, faThumbsUp } from '@fortawesome/free-regular-svg-icons'

library.add(faBell, faComment, faCheckCircle, faComments, faPhone, faPlus, faSearch, faThumbsUp)

Vue.component('fa-icon', FontAwesomeIcon)
