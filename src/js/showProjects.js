import { projects } from "./projects";

const lists = document.getElementById('lists');

import { handleAddTaskBtn } from './handleAddTaskBtn';

function showProjects() {
    while(lists.hasChildNodes()) {
        lists.removeChild(lists.firstChild);
    }    
    // handleAddTaskBtn();
    projects.forEach(function(element) {
        console.log("showProjects called !!!!");
        const project = document.createElement('div');
        project.classList.add('project');
        project.setAttribute('id', 'project');
        project.innerHTML = element.name;
        lists.appendChild(project);
    }) 
}


export { showProjects };