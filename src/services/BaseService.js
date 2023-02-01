import axios from 'axios';
import {DOMAIN_CYBERBUG, TOKEN} from '../util/constants/SettingSystem';

export class BaseService{
    put (url, model) {
        return axios({
            url: `${DOMAIN_CYBERBUG}${url}`,
            method: 'PUT',
            data: model,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)},
        })
    }
    post (url, model) {
        return axios({
            url: `${DOMAIN_CYBERBUG}${url}`,
            method: 'POST',
            data: model,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)},
        })
    }
    get (url) {
        return axios({
            url: `${DOMAIN_CYBERBUG}${url}`,
            method: 'GET',
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)},
        })
    }
    delete (url) {
        return axios({
            url: `${DOMAIN_CYBERBUG}${url}`,
            method: 'DELETE',
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)},
        })
    }
}
