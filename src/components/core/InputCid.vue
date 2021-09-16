<template>
    <InputText v-model="value"  :style="style" />
   
</template>

<script>
export default {    
    props:{emptyColor: String},
    data(){
        return {value: ''};
    },
    methods:{
        
    },
    computed:{
       style(){
           return  this.value == '' ? `background-color : ${this.$props.emptyColor}` : '';
       }
    },

    mounted(){
           // console.log('test: ', this.$props);
        }
};
</script>

<script setup>
import InputText from 'primevue/inputtext';
</script>

