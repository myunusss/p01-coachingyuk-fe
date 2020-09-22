import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBell, faComments, faPhone, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faComment, faThumbsUp } from '@fortawesome/free-regular-svg-icons'

library.add(faBell, faComment, faComments, faPhone, faPlus, faSearch, faThumbsUp)

Vue.component('fa-icon', FontAwesomeIcon)
