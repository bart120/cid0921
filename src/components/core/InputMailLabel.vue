<template>
    <label>{{labelName}}</label>
    <br />
    <InputMail v-bind="$attrs"  />
</template>

<script>
export default {
    props: {
        label:String
    },
    /*data(){
        return {label: this.label}
    }*/
    computed:{
        labelName(){
            return this.label;
        }
    }
}
</script>

<script setup>
import InputMail from './InputMail.vue'
</script>