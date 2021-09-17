<template>
<div>
    <h1>Rechercher une voiture</h1>
    <form>
        
        <div class="p-field p-grid">
            <label>Marque</label>
            <div class="p-col">
           <Dropdown  v-model="search.brandId" :options="brands" optionLabel="name" optionValue="id" />
            </div>
        </div>
            <div class="p-field">
                <button type="submit">Enregistrer</button>
            </div>        
    </form>
    </div>
</template>

<script>
export default {
    mixins:[brandsMixin],
    data(){
        return{
            search: {}
        };
    },
    mounted(){
        console.log('mounted comp', this);
    }
}
</script>
<script setup>

import Dropdown from 'primevue/dropdown';
import * as BrandService from '../../../services/BrandService'
import {brandsMixin} from '../../core/mixt/BrandsMixin';
</script>
