import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBell, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faBell, faPlus, faSearch)

Vue.component('fa-icon', FontAwesomeIcon)
