import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faBan,
  faBell,
  faComments,
  faCheckCircle,
  faChevronLeft,
  faChevronRight,
  faEllipsisH,
  faPhone,
  faPlus,
  faSearch
} from '@fortawesome/free-solid-svg-icons'
import { faComment, faThumbsUp } from '@fortawesome/free-regular-svg-icons'

library.add(
  faBan,
  faBell,
  faComment,
  faCheckCircle,
  faChevronLeft,
  faChevronRight,
  faComments,
  faEllipsisH,
  faPhone,
  faPlus,
  faSearch,
  faThumbsUp
)

Vue.component('fa-icon', FontAwesomeIcon)
