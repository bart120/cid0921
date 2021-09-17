<template>
    <div>
        <h1>Mon compte</h1>
        <p>Modification du compte {{user?.name}}</p>
        <InfoAccount></InfoAccount>
    </div>
</template>

<script>
export default {
    computed:{
            ...mapGetters(['user'])
        },
    provide:{
        userInfo : {name:'Leponge', firstname: 'Bob'}
        //    userInfo: this.user
    }
};
</script>

<script setup>
import { mapGetters } from "vuex";
import InfoAccount from '../../core/InfoAccount.vue';
</script>