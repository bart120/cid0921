<template>
<nav>
    <Menubar :model="items">
        <template #items>
            <router-link :to="item.to">{{item.label}}</router-link>
        </template>
        </Menubar>  
  
  
  </nav>
</template>

<script setup>
import Menubar from 'primevue/menubar'
</script>
<script>

export default {
    data(){
        return{
            items: [
                {
                    label: 'Accueil',
                    icon: 'pi pi-fw pi-file',
                    to: '/'
                },
                {
                    label: 'Voitures',
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
                },
                {
                            label: 'Se connecter',
                            icon: 'pi pi-fw pi-file',
                    to: '/login'
                        }
                
            ]
        }
    }
}
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

