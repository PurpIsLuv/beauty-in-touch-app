// plugins/bl-components.js
import Vue from 'vue'
import VTextField from '@/components/common/VTextField'

const components = { VTextField }

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
