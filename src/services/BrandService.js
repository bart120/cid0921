
import * as UtilService from './UtilService';

const URL = 'https://formation.inow.fr/demo/api/v1/brands';

export function getBrands() {
    return UtilService.getByURL(URL);
}