import { handleAllTasks } from "./handleAllTasks";
import { removeTask } from "./removeTask";
import { showAllTasks } from "./showAllTasks";

function removeTaskListener() {
    const del1 = document.getElementById('op1');
    
    del1.addEventListener('click', function() {
        console.log(this);
        removeTask(this);
        showAllTasks();
    });    
}



export { removeTaskListener };