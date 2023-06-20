// showRelatedTasks.js

/*
    In this file we will search for all the sections to see which of them 
    is Related to this list
*/

import { tasks } from './tasks';
const content = document.getElementById('content');

function showRelatedTasks(projectName) {
    tasks.forEach(element => {
        if(element.list == projectName) {
            // const task = document.createElement('div');
            // const title = document.createElement('div');
            // const date = document.createElement('div');
        
            
            // content.appendChild(task);
            // task.appendChild(title);
            // task.appendChild(date);
        
            // title.innerHTML = element.title;
            // date.innerHTML = element.date;

            // content.appendChild(task);
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
        }
    });
    console.log('from showRelatedTasks');
}


export {showRelatedTasks};