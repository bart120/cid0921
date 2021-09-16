<template>
<form @submit.prevent="submit">
    <div>
        <h1>Connexion</h1>
        <div>
            
            <InputMailLabel label="Login" name="login" v-model="user.login" type="text" emptyColor="green" @errorMail="onError" />
        </div>
        <div>
            <label>Mot de passe</label>
            <br/>
            <InputCid v-model="user.password" type="password" emptyColor="red" />
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
        },
        onError(obj){
            console.log('error: ', obj);
        }
    },
}
</script>

<script setup>
import InputCid from '../../core/InputCid.vue'
import InputMail from '../../core/InputMail.vue'
import InputMailLabel from '../../core/InputMailLabel.vue'
</script>

