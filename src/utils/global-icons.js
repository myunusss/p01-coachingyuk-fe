import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faBan,
  faBell,
  faComments,
  faCheck,
  faCheckCircle,
  faChevronLeft,
  faChevronRight,
  faCircle,
  faEllipsisH,
  faFire,
  faPhone,
  faPlus,
  faSearch,
  faSquare
} from '@fortawesome/free-solid-svg-icons'
import { faComment, faThumbsUp, faStar } from '@fortawesome/free-regular-svg-icons'

library.add(
  faBan,
  faBell,
  faComment,
  faCheck,
  faCheckCircle,
  faChevronLeft,
  faChevronRight,
  faComments,
  faCircle,
  faEllipsisH,
  faFire,
  faPhone,
  faPlus,
  faSearch,
  faThumbsUp,
  faStar,
  faSquare
)

Vue.component('fa-icon', FontAwesomeIcon)
