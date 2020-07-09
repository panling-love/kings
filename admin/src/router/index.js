import Vue from 'vue'
import Router from 'vue-router'
import main from '../components/main'
import categoriesEdit from '../components/categoriesEdit'
import categoriesList from '../components/categoriesList'
import tool from '../components/tool'
import toolList from '../components/toolList'
import hero from '../components/hero'
import heroList from '../components/heroList'
import articles from '../components/articles'
import articlesList from '../components/articlesList'
import ad from '../components/ad'
import adList from '../components/adList'
import adminuser from '../components/adminuser'
import adminuserList from '../components/adminuserList'
import login from '../components/login'

Vue.use(Router)

const router = new Router({
    routes: [{
            path: '/login',
            name: 'login',
            component: login,
            meta: { isPublic: true }
        },
        {
            path: '/',
            name: 'main',
            redirect: '/categories/list',
            component: main,
            children: [{
                    path: '/categories/create',
                    name: 'categoriesEdit',
                    component: categoriesEdit
                }, {
                    path: '/categories/list',
                    name: 'categoriesList',
                    component: categoriesList
                }, {
                    path: '/categories/edit/:id',
                    name: 'categoriesEdit',
                    component: categoriesEdit,
                    props: true
                },
                {
                    path: '/categories/tool',
                    name: 'tool',
                    component: tool,
                }, {
                    path: '/categories/toolList',
                    name: 'toolList',
                    component: toolList,
                }, {
                    path: '/categories/tool/:id',
                    name: 'tool',
                    component: tool,
                    props: true
                }, {
                    path: '/categories/hero',
                    name: 'hero',
                    component: hero,
                }, {
                    path: '/categories/heroList',
                    name: 'heroList',
                    component: heroList,
                }, {
                    path: '/categories/hero/:id',
                    name: 'hero',
                    component: hero,
                    props: true
                }, {
                    path: '/categories/articles',
                    name: 'articles',
                    component: articles,
                }, {
                    path: '/categories/articlesList',
                    name: 'articlesList',
                    component: articlesList,
                }, {
                    path: '/categories/articles/:id',
                    name: 'articles',
                    component: articles,
                    props: true
                }, {
                    path: '/categories/ad',
                    name: 'ad',
                    component: ad,
                }, {
                    path: '/categories/adList',
                    name: 'adList',
                    component: adList,
                }, {
                    path: '/categories/ad/:id',
                    name: 'ad',
                    component: ad,
                    props: true
                }, {
                    path: '/categories/adminuser',
                    name: 'adminuser',
                    component: adminuser,
                }, {
                    path: '/categories/adminuserList',
                    name: 'adminuserList',
                    component: adminuserList,
                }, {
                    path: '/categories/adminuser/:id',
                    name: 'adminuser',
                    component: adminuser,
                    props: true
                },
            ]
        },

    ]
})


//客户端路由限制
router.beforeEach((to, from, next) => {
    if (!to.meta.isPublic && !localStorage.token) {
        return next('/login');
    }
    next();
})

export default router