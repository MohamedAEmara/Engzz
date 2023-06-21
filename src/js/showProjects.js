import { projects } from "./projects";
import iconPng from '../images/list2.png';

const lists = document.getElementById('lists');



export function showProjects() {
    while(lists.hasChildNodes()) {
        lists.removeChild(lists.firstChild);
    }    
    projects.forEach(function(element) {
        const icon = document.createElement('img');
        icon.src = iconPng;
        console.log("showProjects called !!!!");
        const project = document.createElement('div');
        project.classList.add('project');
        const name = document.createElement('div');
        name.innerHTML = element.name;
        project.appendChild(icon);
        project.appendChild(name);
        // project.innerHTML = element.name;
        lists.appendChild(project);
    }) 
}
