<template>
    <form>
        <div class="p-fluid">
    <div class="p-field p-grid">
        <label for="firstname" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Firstname</label>
        <div class="p-col-12 p-md-10">
            <InputText v-model="userInfo.name" type="text" />
        </div>
    </div>
    <div class="p-field p-grid">
        <label for="lastname" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Lastname</label>
        <div class="p-col-12 p-md-10">
            <InputText v-model="userInfo.firstname" type="text" />
        </div>
    </div>
</div>
    </form>
</template>
<script setup>
import InputText from 'primevue/inputtext';
</script>
<script>
export default {
    inject: ['userInfo']
}
</script>