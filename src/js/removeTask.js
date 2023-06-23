import { handleAllTasks } from './handleAllTasks';
import { showAllTasks } from './showAllTasks';
import { tasks } from './tasks';


function removeTask(element) {
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
    tasks.forEach(task => {
        if(task.id == secondClass)
            task.complete = true;
    });
    showAllTasks();
    console.log('after handleAllTasks');
}



export { removeTask };