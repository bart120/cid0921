import axios from 'axios';

function promiseResolve(resp) {
    if (resp.data == null) {
        return Promise.reject('La ressource est introuvable');
    }
    return Promise.resolve(resp.data);
}

function promiseReject(err) {
    console.error(err.message || err);
    return Promise.reject(err.message);
}

export function getByURL(url) {
    return axios.get(url).then(promiseResolve, promiseReject);
}