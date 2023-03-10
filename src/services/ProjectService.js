import { BaseService } from './BaseService';

export class ProjectService extends BaseService {
    constructor() {
        super();
    }

    deleteProject = (id) => {
        return this.delete(`/Project/deleteProject?projectId=${id}`);
    }
    getProjectDetail = (id) => {
        return this.get(`/Project/getProjectDetail?id=${id}`);
    }
}

export const projectService = new ProjectService();


