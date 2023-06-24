// showRelatedTasks.js

/*
    In this file we will search for all the sections to see which of them 
    is Related to this list
*/

import { tasks } from './tasks';
const content = document.getElementById('content');
const { format, addDays, isThisWeek, differenceInDays, parseISO } = require('date-fns');

function showRelatedTasks(projectName) {
    content.innerHTML = "";
    content.textContent = "";
    while(content.hasChildNodes()) {
        content.removeChild(content.children[0]);
    }
    const listTitle = document.createElement('div');
    listTitle.innerHTML = projectName;
    content.appendChild(listTitle);

    tasks.forEach(element => {
        if(element.list == projectName && element.complete == false) {
            // const task = document.createElement('div');
            // const title = document.createElement('div');
            // const date = document.createElement('div');
        
            
            // content.appendChild(task);
            // task.appendChild(title);
            // task.appendChild(date);
        
            // title.innerHTML = element.title;
            // date.innerHTML = element.date;

            // content.appendChild(task);
            // const line = document.createElement('div');
            // const name = document.createElement('div');
            // const date = document.createElement('div');
            // const level = document.createElement('div');
            // const check = document.createElement('button');
            // line.classList.add('task');
            // name.innerHTML = element.title;
            // date.innerHTML = element.date;
            // level.innerHTML = element.priority;
            // check.innerHTML = " ";
            // line.appendChild(name);
            // line.appendChild(date);
            // line.appendChild(level);
            // line.appendChild(check);
            // content.appendChild(line);
            const line = document.createElement('div');
            const check = document.createElement('div');
            check.setAttribute('id', 'check');
            check.classList.add('check');
            const date = document.createElement('div');
            const name = document.createElement('div');
            // const level = document.createElement('div');
            
            const left = document.createElement('div');
            const right = document.createElement('div');


            left.classList.add('left');
            right.classList.add('right');
            // left.appendChild(check);
            // line.appendChild(title);

            // const check = document.createElement('button');
            line.classList.add('task');

            name.innerHTML = element.title;
            // date.innerHTML = element.date;
            let tmp = element.date;
            let level = element.priority;
            console.log(tmp + " = haha");
            const dt = parseISO(tmp);
            const formattedDate = format(dt, 'dd/MM/yyyy');
            // check.classList.add(element.priority);
            check.setAttribute('id', element.priority);
            check.innerHTML = " ";
            date.innerHTML = formattedDate;
            // line.appendChild(name);
            // line.appendChild(date);
            // line.appendChild(level);
            // line.appendChild(check);
            content.appendChild(line);
            left.appendChild(check);
            left.appendChild(name);

            right.appendChild(date);

            line.appendChild(left);
            line.appendChild(right);
            content.append(line);
            check.classList.add(level);
        }
    });
    console.log('from showRelatedTasks');
}


export {showRelatedTasks};