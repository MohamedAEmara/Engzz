import { handleAllTasks } from "./handleAllTasks";
import { removeTask } from "./removeTask";
import { showAllTasks } from "./showAllTasks";

function removeTaskListener2(origin) {
    
    const del2 = document.getElementById('op2');
    
    del2.addEventListener('click', function() {
        console.log(this);
        removeTask(this);
        if(origin == 1)
            showTodayTasks();
        else if(origin == 2)
            showWeekTasks();
        else if(origin == 3)
            showAllTasks();
    });    
}



export { removeTaskListener2 };