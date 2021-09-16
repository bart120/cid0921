<template>
<form @submit.prevent="submit">
    <div>
        <h1>Connexion</h1>
        <div>
            <label>Login</label>
            <br/>
            <InputCid v-model="user.login" type="text"  color="red" />
        </div>
        <div>
            <label>Mot de passe</label>
            <br/>
            <input v-model="user.password" type="password" />
        </div>
        <div>
            <button type="submit">Se connecter</button>
        </div>
    </div>
    </form>
</template>

<script>
export default {
data(){
        return{
            user:{
                login:'',
                password: ''
            }
        };
    },
methods:{
        submit(){
            console.log(this.user);
            //appel serveur
            this.$router.push({path:"/"});
        }
    },
}
</script>

<script setup>
import InputCid from '../../core/InputCid.vue'
</script>

<style scoped>
.empty{
    background-color: brown;
}
</style>