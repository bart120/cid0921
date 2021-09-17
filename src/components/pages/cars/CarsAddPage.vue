<template>
<div>
    <h1>Ajouter une voiture</h1>
    <form @submit.prevent="submit">
        <div class="p-fluid">
        <div class="p-field p-grid">
            <label>Modèle</label>
            <div class="p-col">
           <InputText v-model="car.model"  />
           </div>
        </div>
        <div class="p-field p-grid">
            <label>Prix</label>
            <div class="p-col">
           <InputNumber v-model="car.price"  />
           </div>
        </div>
        <div class="p-field p-grid">
            <label>Date mise en circulation</label>
            <div class="p-col">
           <Calendar v-model="car.dateOfCirculation"  />
            </div>
        </div>
        <div class="p-field p-grid">
            <label>Marque</label>
            <div class="p-col">
           <Dropdown  v-model="car.brandId" :options="brands" optionLabel="name" optionValue="id" />
            </div>
        </div>
            <div class="p-field">
                <button type="submit">Enregistrer</button>
            </div>
        </div>
        
    </form>
    </div>
</template>

<script>
export default {
    mixins:[brandsMixin],
    data(){
        return{
            car: {}
        };
    },
    mounted(){
        console.log('mounted comp', this);
    },
    methods:{
        submit(){
            console.log(this.car);
        }
    }


}
</script>
<script setup>
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Calendar from 'primevue/calendar';
import Dropdown from 'primevue/dropdown';
import {brandsMixin} from '../../core/mixt/BrandsMixin';

</script>
