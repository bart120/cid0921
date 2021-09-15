import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createRouter, createWebHistory } from 'vue-router'
//import CarsAddPage from './components/pages/cars/CarsAddPage.vue'
import HomePage from './components/pages/HomePage.vue'
import LoginPage from './components/pages/authentication/LoginPage.vue'

const CarsAddPage = () => import(/* webpackChunckName: "cars" */ './components/pages/cars/CarsAddPage.vue')
const CarsListPage = () => import(/* webpackChunckName: "cars" */ './components/pages/cars/CarsListPage.vue')

const routes = [
    { path: '/cars/add', component: CarsAddPage },
    { path: '/cars/list', component: CarsListPage },
    { path: '/login', component: LoginPage },
    //{ path: '/cars/detail/:id', component: CarsListPage },
    { path: '/', component: HomePage }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
createApp(App)
    .use(router)
    .mount('#app');


/*const router = new VueRouter({ routes });

const app = new Vue({ router }).$mount();*/
