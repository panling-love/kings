import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main'
import Home from '../components/Home'
import Article from '../components/Article'
import Hero from '../components/Hero'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'main',
        component: Main,
        children: [{
            path: '/',
            name: 'home',
            component: Home
        }, {
            path: '/articles/:id',
            name: 'article',
            component: Article,
            props: true
        }]
    }, {
        path: '/hero/:id',
        name: 'hero',
        component: Hero,
        props: true
    }]
})