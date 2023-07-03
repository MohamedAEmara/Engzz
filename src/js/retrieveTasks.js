import { tasks } from './tasks';


function retrieveTasks() {
    if(JSON.parse(localStorage.getItem("tasks")) == null) {
        return false;
    } 
    tasks = JSON.parse(localStorage.getItem("tasks"));
    return 1;
}


export { retrieveTasks };