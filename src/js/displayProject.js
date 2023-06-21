import { ContextExclusionPlugin } from 'webpack';
import { showRelatedTasks } from './showRelatedTasks';
// import { handleAddTaskBtn } from './handleAddTaskBtn';

const content = document.getElementById('content');

function display(project) {
    // const tmp = document.querySelector(' :nth-child(3)')
    // const children = project.children;
    // const tmp = children.item
    // content.innerHTML = project.children[1].innerHTML;
    const tmp = project.innerHTML;
    
    showRelatedTasks(project.innerHTML);
    const addTaskBtn = document.createElement('button');
    // addTaskBtn.classList.add('addTask');
    addTaskBtn.setAttribute('id', 'addTask');
    addTaskBtn.innerHTML = "+";
    content.appendChild(addTaskBtn);


}


export {display};