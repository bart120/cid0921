import * as UtilService from './UtilService';

const URL = 'https://formation.inow.fr/demo/api/v1/cars';

export function getCars() {
    return UtilService.getByURL(URL);
}