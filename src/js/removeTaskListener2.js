import { handleAllTasks } from "./handleAllTasks";
import { removeTask } from "./removeTask";
import { showAllTasks } from "./showAllTasks";
import { showWeekTasks } from "./showWeekTasks";
import { showTodayTasks } from "./showTodayTasks";
import { display2 } from "./display2";
import { display } from "./displayProject";

function removeTaskListener2(origin) {
    
    const del2 = document.getElementById('op2');
    
    del2.addEventListener('click', function() {
        console.log(this);
        removeTask(this, origin);
        if(origin == 1)
            showTodayTasks();
        else if(origin == 2)
            showWeekTasks();
        else if(origin == 3)
            showAllTasks();
        else 
            display2(origin);
    });    
}



export { removeTaskListener2 };