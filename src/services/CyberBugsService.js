import axios from "axios"
import { DOMAIN_CYBERBUG, TOKEN } from "../util/constants/SettingSystem";


export class CyberBugsService {
    signInCyberBugs = (userLogin) => {
        return axios({
            url: `${DOMAIN_CYBERBUG}/Users/signin`,
            method: 'POST',
            data: userLogin
        })
    }
    getAllCategory = () => {

        return axios({
            url: `${DOMAIN_CYBERBUG}/ProjectCategory`,
            method: 'GET'
        })
    }
    createProject = (project) => {
        return axios({
            url: `${DOMAIN_CYBERBUG}/Project/createProject`,
            method: 'POST',
            data: project
        })
    }
    createProjectAuthorization = (project) => {
        return axios({
            url: `${DOMAIN_CYBERBUG}/Project/createProjectAuthorize`,
            method: 'POST',
            data: project,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)},
        })
    }
    getAllProject = () => {
        return axios({
            url: `${DOMAIN_CYBERBUG}/Project/getAllProject`,
            method: 'GET',
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)},
        })
    }
    updateProject = (project) => {
        return axios({
            url: `${DOMAIN_CYBERBUG}/Project/updateProject?projectId=${project.id}`,
            method: 'PUT',
            data: project,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)},
        })
    }

}

export const cyberBugsService = new CyberBugsService();