import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
import login from '../view/login/login.vue'
import index from '../view/index/index.vue'
const routes = [
    { path: '/login', component: login },
    { path: '/', redirect: '/login' },
    { path: '/index', component: index },
];
const router = new VueRouter({
    routes
})
export default router;