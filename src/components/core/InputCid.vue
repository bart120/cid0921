<template>
    <InputText />
</template>

<script>
export default {

    props:{color: String},

    methods:{
        mounted(){
            console.log(this.$props.color);
        }
    }

};
</script>

<script setup>
import InputText from 'primevue/inputtext';
</script>