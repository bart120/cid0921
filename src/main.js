import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import App from './App.vue'
import { createStore } from 'vuex'
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/saga-blue/theme.css';
import './index.css'
import { createRouter, createWebHistory } from 'vue-router'
//import CarsAddPage from './components/pages/cars/CarsAddPage.vue'
import HomePage from './components/pages/HomePage.vue'
import LoginPage from './components/pages/authentication/LoginPage.vue'
import CarsSearchPage from './components/pages/cars/CarsSearchPage.vue'
import AccountPage from './components/pages/account/AccountPage.vue'
import userStore from './store/user-store';


const CarsAddPage = () => import(/* webpackChunckName: "cars" */ './components/pages/cars/CarsAddPage.vue')
const CarsListPage = () => import(/* webpackChunckName: "cars" */ './components/pages/cars/CarsListPage.vue')

const routes = [
    { path: '/cars/add', component: CarsAddPage },
    { path: '/cars/list', component: CarsListPage },
    { path: '/cars/search', component: CarsSearchPage },
    { path: '/login', component: LoginPage },
    { path: '/account', component: AccountPage },
    //{ path: '/cars/detail/:id', component: CarsListPage },
    { path: '/', component: HomePage }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});


const store = createStore(userStore);

createApp(App)
    .use(router)
    .use(PrimeVue)
    .use(store)
    .mount('#app');


/*const router = new VueRouter({ routes });

const app = new Vue({ router }).$mount();*/
