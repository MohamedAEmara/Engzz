import { tasks } from "./tasks";

const allTasks = document.getElementById('inbox');
const content = document.getElementById('content');

function handleAllTasks() {
    
    allTasks.addEventListener('click', function(){
        // clear content section first
        while(content.hasChildNodes()) {
            content.removeChild(content.childNodes[0]);
        }
        tasks.forEach(element => {
            const line = document.createElement('div');
            const name = document.createElement('div');
            const date = document.createElement('div');
            const level = document.createElement('div');
            const check = document.createElement('button');
            line.classList.add('task');
            name.innerHTML = element.title;
            date.innerHTML = element.date;
            level.innerHTML = element.priority;
            check.innerHTML = " ";
            line.appendChild(name);
            line.appendChild(date);
            line.appendChild(level);
            line.appendChild(check);
            content.appendChild(line);
        }) 
    })
}


export {handleAllTasks};