import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
import login from '../view/login/login.vue'
const routes = [
    { path: '/login', component: login }
];
const router = new VueRouter({
    routes
})
export default router;