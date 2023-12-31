import { showRelatedTasks } from './showRelatedTasks';
// import { handleAddTaskBtn } from './handleAddTaskBtn';
import { handleAddTaskBtn } from './handleAddTaskBtn';

const content = document.getElementById('content');

function display(project) {
    content.innerHTML = project.innerHTML;
    showRelatedTasks(project.innerHTML);

    const addTaskBtn = document.createElement('button');
    addTaskBtn.setAttribute('id', 'addTask');
    addTaskBtn.innerHTML = "+";
    content.appendChild(addTaskBtn);
    handleAddTaskBtn();

}


export {display};