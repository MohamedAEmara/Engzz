import { task } from "./createTask";
import { tasks } from "./tasks";
import { removeTask } from './removeTask';
import { fi } from "date-fns/locale";
import { removeTaskListener1 } from './removeTaskListener1';
import { removeTaskListener2 } from './removeTaskListener2';
import { removeTaskListener3 } from './removeTaskListener3';

const { format, addDays, isThisWeek, differenceInDays, parseISO } = require('date-fns');

const allTasks = document.getElementById('inbox');

function showAllTasks() {
    
    const content = document.getElementById('content');
    
        console.log('called');
        // clear content section first
        while(content.hasChildNodes()) {
            content.removeChild(content.childNodes[0]);
        }
        const all = document.createElement('div');
        all.innerHTML = "All Tasks";
        content.appendChild(all);
        tasks.forEach(element => {
            if(element.complete == false) {
                console.log(element);   
                const line = document.createElement('div');
                const check = document.createElement('div');
                check.setAttribute('id', 'check');
                check.classList.add('check');
                const date = document.createElement('div');
                const name = document.createElement('div');
                
                const left = document.createElement('div');
                const right = document.createElement('div');
    
    
                left.classList.add('left');
                right.classList.add('right');
    
                line.classList.add('task');
    
                name.innerHTML = element.title;
                let tmp = element.date;
                let level = element.priority;
                console.log(tmp + " = haha");
                const dt = parseISO(tmp);
                const formattedDate = format(dt, 'dd/MM/yyyy');
     
                check.setAttribute('id', element.priority);
                check.innerHTML = " ";
                date.innerHTML = formattedDate;
                
                content.appendChild(line);
                left.appendChild(check);
                left.appendChild(name);
    
                right.appendChild(date);
    
                line.appendChild(left);
                line.appendChild(right);
                content.append(line);
                check.classList.add(element.id);
                
                if(element.priority == 'op1') {

                    removeTaskListener1(3);
                }
                if(element.priority == 'op2') {
                    removeTaskListener2(3);

                }
                if(element.priority == 'op3') {
                    removeTaskListener3(3);

                }

            }
            
        }) 

}


export {showAllTasks};