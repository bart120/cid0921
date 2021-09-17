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
        //...mapActions['login','logout'],
        //...mapMutations['login'],
        submit(){
            //console.log(this.user);
            //this.login(this.user.login, this.user.password);
            this.$store.dispatch('login', this.user.login, this.user.password);
            //this.$store.commit('maMutation', payload);


            //const u = {name: 'Bob', mail: this.user.login, token: 'DSGQFGZ356Y4ERHGF'};
            //sessionStorage.setItem('USER', JSON.stringify(u));
            this.$router.push({path:"/"});
        },
        onError(obj){
            console.log('error: ', obj);
        }
    },
}
</script>

<script setup>
import { mapActions, mapMutations } from 'vuex';
import InputCid from '../../core/InputCid.vue'
import InputMail from '../../core/InputMail.vue'
import InputMailLabel from '../../core/InputMailLabel.vue'
</script>

