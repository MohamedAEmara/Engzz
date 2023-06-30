import { tasks } from "./tasks";
const { format, addDays, differenceInDays, parseISO } = require('date-fns');

import { removeTaskListener1 } from "./removeTaskListener1";
import { removeTaskListener2 } from "./removeTaskListener2";
import { removeTaskListener3 } from "./removeTaskListener3";


function showWeekTasks() {

    content.innerHTML = "";
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    const weekTitle = document.createElement('div');
    weekTitle.innerHTML = "This Week";
    content.appendChild(weekTitle);

    tasks.forEach(element => {
        if(element.complete == false) {
            const date = element.date;
            const lowerBound = new Date();
            const upperBound = addDays(lowerBound, 7);
            
            const lb = format(lowerBound, 'yyyy-MM-dd');
            const up = format(upperBound, 'yyyy-MM-dd');
    
            const date1 = parseISO(lb);
            const date2 = parseISO(up);
            const currDate =parseISO(date);
    
            const diff1 = differenceInDays(date2, currDate);
            const diff2 = differenceInDays(currDate, date1);
    
            // console.log(lb);
            // console.log(up);
            // console.log(date);
            // console.log();

            if(diff1 >= 0 && diff2 >= 0) {  
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
                    removeTaskListener1(2);
                    // showWeekTasks();
                }
                if(element.priority == 'op2') {
                    removeTaskListener2(2);
                    // showWeekTasks();
                }
                if(element.priority == 'op3') {
                    removeTaskListener3(2);
                    // showWeekTasks();
                }
            }
        }
        

        //   // task is in <= 7 days due date
        //     if(element.complete == false) {
                

        //     }
        // }
        
    });
}

export { showWeekTasks };