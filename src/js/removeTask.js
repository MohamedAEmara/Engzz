import { handleAllTasks } from './handleAllTasks';
import { showAllTasks } from './showAllTasks';
import { tasks } from './tasks';
import { showWeekTasks } from './showWeekTasks';
import { showTodayTasks } from './showTodayTasks';
import { display } from './displayProject';
import { Project } from './createProject';
import { display2 } from './display2';

function removeTask(element, origin) {
    // Get a reference to the element
    // const myDiv = document.getElementById("myDiv");

    // Get the value of the class attribute
    const classes = element.getAttribute("class");

    // Split the string into an array of class names
    const classNames = classes.split(" ");

    // Get the second class name (at index 1)
    const secondClass = classNames[1];
    // console.log('TEST');
    // Log the result
    console.log(secondClass); // Output: "red-border"
    // console.log('origin = ' + origin);
    tasks.forEach(task => {
        if(task.id == secondClass) {
            task.complete = true;
            console.log('marked task is ' + task.title);
        }
        console.log('there is a task named ' + task.title);
    });
    console.log('origin = ' + origin);
    if(origin == 1) {
        showTodayTasks();
        console.log('today');
    }
    else if(origin == 2) {
        showWeekTasks();
        console.log('week');
    }
    else if(origin == 3) {
        showAllTasks();
        console.log('all');
    }
    else {
        console.log(origin + ' else ');
        // console.log('else');
        display2(origin);
    }
    // showAllTasks();
    console.log('after handleAllTasks');
}



export { removeTask };