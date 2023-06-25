import { showRelatedTasks } from './showRelatedTasks';
// import { handleAddTaskBtn } from './handleAddTaskBtn';
import { handleAddTaskBtn } from './handleAddTaskBtn';

const content = document.getElementById('content');

function display2(project) {
    while (content.hasChildNodes()) {
        content.removeChild(content.lastChild);
    }
    console.log(project);
    content.innerHTML = project;
    showRelatedTasks(project);

    const addTaskBtn = document.createElement('button');
    // addTaskBtn.classList.add('addTask');
    addTaskBtn.setAttribute('id', 'addTask');
    addTaskBtn.innerHTML = "+";
    content.appendChild(addTaskBtn);
    // handleAddTaskBtn();
    handleAddTaskBtn();

}


export {display2};