import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import vanButton from "@/wxcomponents/vant/button/index.js"
Vue.component("vanButton",vanButton)
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
