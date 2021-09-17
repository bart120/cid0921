<template>
    <h1>Liste des voitures</h1>
    <table>
        <thead>
            <tr>
                <td>id</td>
                <td>Modèle</td>
                <td>Prix</td>
                <td>Marque</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="car in cars" :key="car.id">
                <td>{{car.id}}</td>
                <td>{{car.model}}</td>
                <td>{{car.price}}</td>
                <td>{{car.brand?.name}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import * as BrandService from '../../../services/BrandService'
import * as CarService from '../../../services/CarsService'
</script>
<script>
export default {
    data(){
        return{cars: []}
    },
    mounted(){
        CarService.getCars().then(data =>{
            const proms = data.map(car => 
                BrandService.getBrandById(car.brandID).then(brand => {
                    car.brand = brand;
                    return car;
                }));

            /*let tab = [];
            for (const car of data) {
                tab.push(BrandService.getBrandById(car.brandID).then(brand => {
                    car.brand = brand;
                    return car;
                }));
            }*/

            Promise.all(tab).then(cars =>{
                this.cars = cars;
                //console.log('all', this.cars);
            });

            /*for (const car of data) {
                BrandService.getBrandById(car.brandID).then(brand =>{
                    car.brand = brand;
                    console.log('marque', brand.name);
                });
            }
            console.log('update data');
            this.cars = data;*/
        });
    }
}
</script>