<template>
<nav>
    <Menubar :model="items">
        <template #items>
            <router-link :to="item.to">{{item.label}}</router-link>
        </template>
        <template #end >
            <div v-if="isConnected">
                Bonjour {{user?.name}}
            <button @click="logout">Se déconnecter</button>
            <router-link to="/account">Mon compte</router-link>
            </div>
            <div v-else>
            <router-link to="/login">{{$t('menu.login')}}</router-link>
            </div>
        </template>
    </Menubar>  
  </nav>
</template>
<script>
export default {
    /*setup(){
        let store = useStore();
    },*/
computed:{
        /*isConnected(){
            return this.$store.getters.isConnected;
        }*/
        ...mapGetters(['isConnected', 'user'])
    },
    methods:{
         logout(){
             this.$store.dispatch('logout');
         }
    },
data(){
        return{
            items: [
                {
                    label: this.$t('menu.home'),
                    icon: 'pi pi-fw pi-file',
                    to: '/'
                },
                {
                    label: this.$t('menu.cars'),
                    icon: 'pi pi-fw pi-file',
                    items:[
                        {
                            label: 'Ajouter une voiture',
                            icon: 'pi pi-fw pi-file',
                            to: '/cars/add'
                        },
                        {
                            label: 'Lister les voitures',
                            icon: 'pi pi-fw pi-file',
                            to: '/cars/list'
                        },
                        {
                            label: 'Rechercher',
                            icon: 'pi pi-fw pi-file',
                            to: '/cars/search'
                        }
                    ]
                }/*,
                {
                    label: 'Se connecter',
                    icon: 'pi pi-fw pi-file',
                    to: '/login'
                }*/
            ]
        };
    },
mounted(){
        //if(sessionStorage.getItem('USER'))
        //    this.user = JSON.parse(sessionStorage.getItem('USER'));
        //console.log(this.isConnected);
    }
};
</script>

<script setup>

import Menubar from 'primevue/menubar'
import { mapGetters, useStore } from 'vuex';
</script>


<style scoped>
ul li{
    list-style: none;
    display: inline;
    margin-right: 10px;
}
ul{
    margin: 0 auto;
    width: 70vw;
}
</style>

