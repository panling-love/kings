// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import ElementUI from '../node_modules/element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

import http from './http'
Vue.prototype.$http = http

import './style.css'

//mixin表示代码块：这里表示全局都有这个代码块
Vue.mixin({
    computed: {
        uploadUrl() {
            return this.$http.defaults.baseURL + 'upload'
        }
    },
    methods: {
        getAuthHeaders() {
            return {
                Authorization: `Bearer ${localStorage.token || ''}`
            }
        }
    },
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})