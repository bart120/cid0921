import * as BrandService from '../../../services/BrandService'

export const brandsMixin = {
    data() {
        return { brands: [] };
    },
    mounted() {
        console.log('mounted mix', BrandService.getBrands());
        BrandService.getBrands().then((data) => {
            this.brands = data;
        });
    },
    /*methods: {
        init(obj) {
            console.log('mounted mix', this);
            BrandService.getBrands().then((data) => {
                this.brands = data;
            });
        }
    }*/
}