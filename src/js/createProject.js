// createProject.js

import { projects } from "./projects";

class Project {
    constructor(name) {
        this.id = projects.length;
        this.name = name;
        this.createProject();
    }
    createProject() {
        projects.push(this);
        let strProjects = JSON.stringify(projects);
        localStorage.setItem("projects", strProjects);
    }
}


export {Project};