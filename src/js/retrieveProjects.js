import { projects } from './projects';

function retrieveProjects() {
    if(JSON.parse(localStorage.getItem('projects')) == null) {
        return false;
    }    
    projects = JSON.parse(localStorage.getItem("projects"));
    return true;
}


export { retrieveProjects };