import Vue from 'vue'
import ValidationMessages from 'vee-validate/dist/locale/en'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required, email, is, size } from 'vee-validate/dist/rules'

Vue.component('v-provider', ValidationProvider)
Vue.component('v-observer', ValidationObserver)

extend('required', {
  ...required,
  message: ValidationMessages.messages.required
})

extend('email', {
  ...email,
  message: ValidationMessages.messages.email
})

extend('is', {
  ...is,
  message: ValidationMessages.messages.is
})

extend('size', {
  ...size,
  message: ValidationMessages.messages.size
})
