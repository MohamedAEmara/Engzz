import { projects } from "./projects";

const lists = document.getElementById('lists');



export function showProjects() {
    while(lists.hasChildNodes()) {
        lists.removeChild(lists.firstChild);
    }    
    projects.forEach(function(element) {
        console.log("showProjects called !!!!");
        const project = document.createElement('div');
        project.classList.add('project');
        project.innerHTML = element.name;
        lists.appendChild(project);
    }) 
}
