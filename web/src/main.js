// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


Vue.config.productionTip = false


import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(element);


//引入字体图标
import './assets/iconfont/iconfont.css'

//引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'



// import style
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */ )

//引入自定义卡片组件
import Card from './components/Card'
Vue.component('m-card', Card)

import ListCard from './components/ListCard'
Vue.component('m-ListCard', ListCard)

//引入axios
import axios from 'axios'
Vue.prototype.$http = axios.create({
    // baseURL: process.env.VUE_APP_API_URL || '/web/api',
    baseURL: 'http://localhost:3000/web/api'
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})