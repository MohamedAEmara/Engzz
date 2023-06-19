import { showRelatedTasks } from './showRelatedTasks';


const content = document.getElementById('content');

function display(project) {
    content.innerHTML = project.innerHTML;
    showRelatedTasks(project.innerHTML);
}

export {display};