// import { task } from './createTask';
import { display } from './displayProject';
import { bindAll } from "lodash";
import { display2 } from './display2';

function handleAddTaskBtn() {
    const btn = document.getElementById('addTask');
    const popup = document.getElementById('popup');
    const all = document.getElementById('all');
    console.log('in handle click add task btn');
    btn.addEventListener('click', () => {
        console.log('add task clicked');
        popup.classList.add('active');   
        all.classList.add('disable');
        // display2(project);

    });
    // showRelatedTasks();
}


export { handleAddTaskBtn };