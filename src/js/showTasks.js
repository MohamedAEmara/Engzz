import { tasks } from "./tasks";


export function showTasks() {
    tasks.forEach(function(element) {
        console.log("showTasks called !!!!");
        const task = document.createElement('div');
        const title = document.createElement('div');
        const date = document.createElement('div');
    
        
        content.appendChild(task);
        task.appendChild(title);
        task.appendChild(date);
    
        title.innerHTML = element.title;
        date.innerHTML = element.date;
    
        
        // title.classList.add('tmp');
        // const innerTxt = element.title;
        // ele.innerHTML = innerTxt;
    }) 
}
