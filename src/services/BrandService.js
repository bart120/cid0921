
import * as UtilService from './UtilService';

const URL = 'https://formation.inow.fr/demo/api/v1/brands';

export function getBrands() {
    if (sessionStorage.getItem('BRANDS'))
        return Promise.resolve(JSON.parse(sessionStorage.getItem('BRANDS')));

    UtilService.getByURL(URL).then(data => {
        sessionStorage.setItem('BRANDS', JSON.stringify(data));
        return Promise.resolve(data);
    });
}