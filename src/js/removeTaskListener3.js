import { handleAllTasks } from "./handleAllTasks";
import { removeTask } from "./removeTask";
import { showAllTasks } from "./showAllTasks";

function removeTaskListener3(origin) {

    const del3 = document.getElementById('op3');
    
    del3.addEventListener('click', function() {
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



export { removeTaskListener3 };