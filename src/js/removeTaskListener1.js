import { display } from "./displayProject";
import { handleAllTasks } from "./handleAllTasks";
import { removeTask } from "./removeTask";
import { showAllTasks } from "./showAllTasks";
import { showTodayTasks } from "./showTodayTasks";
import { showWeekTasks } from "./showWeekTasks";
import { display2 } from "./display2";

function removeTaskListener1(origin) {
    const del1 = document.getElementById('op1');

    console.log('remove task listener 1 '); 
    console.log(del1 + '  =  del1');
    del1.addEventListener('click', function() {
        console.log(this);
        console.log(origin);
        removeTask(this, origin);
        if(origin == 1)
            showTodayTasks();
        else if(origin == 2)
            showWeekTasks();
        else if(origin == 3)
            showAllTasks();
        else {
            console.log(origin + " else "  );
            display2(origin);
        }
    });    

}



export { removeTaskListener1 };