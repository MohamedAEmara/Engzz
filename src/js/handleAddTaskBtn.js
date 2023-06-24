// import { task } from './createTask';

import { bindAll } from "lodash";


function handleAddTaskBtn() {
    const btn = document.getElementById('addTask');
    const popup = document.getElementById('popup');
    const all = document.getElementById('all');
    console.log('in handle click add task btn');
    btn.addEventListener('click', () => {
        console.log('add task clicked');
        popup.classList.add('active');   
        all.classList.add('disable');
    });
    // showRelatedTasks();
}


export { handleAddTaskBtn };