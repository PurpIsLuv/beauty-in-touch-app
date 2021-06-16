// plugins/bl-components.js
import Vue from 'vue'
import VTextField from '@/components/common/VTextField'
import VAutocomplete from '@/components/common/VAutocomplete'

const components = { VTextField, VAutocomplete }

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
