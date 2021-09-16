<template>
<InputCid v-model="value" />
</template>

<script>
const regMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export default {
    //inheritAttrs: false,
    props:{
        name:String
    },
    data(){
        return {value : ''};
    },
    emits:['errorMail'],
    watch:{
        value(newValue, oldValue){
            this.validate(newValue);
        }
    },
    methods:{
        validate(mail){
            this.$emit('errorMail',  {field: this.$props.name, test : regMail.test(mail)});
        }
    }

}
</script>
<script setup>
import InputCid from './InputCid.vue'
</script>