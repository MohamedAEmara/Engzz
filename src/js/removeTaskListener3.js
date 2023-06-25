import { handleAllTasks } from "./handleAllTasks";
import { removeTask } from "./removeTask";
import { showAllTasks } from "./showAllTasks";
import { showWeekTasks } from "./showWeekTasks";
import { showTodayTasks } from "./showTodayTasks";
import { display2 } from "./display2";

function removeTaskListener3(origin) {

    const del3 = document.getElementById('op3');
    
    del3.addEventListener('click', function() {
        console.log(this);
        console.log('origin: ' + origin);
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



export { removeTaskListener3 };