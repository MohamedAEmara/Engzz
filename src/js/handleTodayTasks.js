// import { showTasks } from "./showTasks";
import { tasks } from "./tasks";
const { format, addDays, isThisWeek, differenceInDays, parseISO } = require('date-fns');
import { removeTaskListener1 } from "./removeTaskListener1";
import { removeTaskListener2 } from "./removeTaskListener2";
import { removeTaskListener3 } from "./removeTaskListener3";
import { showTodayTasks } from "./showTodayTasks";
// import { showAllTasks } from "./showAllTasks";

function handleTodayTasks() {
    
    let currentDate = new Date()
    let year = currentDate.getFullYear()
    let month = currentDate.getMonth() + 1 // month is 0-based, so add 1
    let day = currentDate.getDate()
    if(month < 10)
        month = '0' + month;
    if(day < 10)
        day = '0' + day;
    const date = year + "-" + month + "-" + day;
    const btn = document.getElementById('today');
    console.log('listened');
    btn.addEventListener('click', function() {
        const content = document.getElementById('content');
    while(content.hasChildNodes()) {
        content.removeChild(content.childNodes[0]);
    }

    const todayTitle = document.createElement('div');
    todayTitle.innerHTML = "Today";
    content.appendChild(todayTitle);
        

        tasks.forEach(element => {
            if(date == element.date) {
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
                        removeTaskListener1();
                        // handleTodayTasks();
                        showTodayTasks(1);
                    }
                    if(element.priority == 'op2') {
                        removeTaskListener2();
                        // handleTodayTasks();
                        showTodayTasks(1);
                    }
                    if(element.priority == 'op3') {
                        removeTaskListener3();
                        // handleTodayTasks();
                        showTodayTasks(1);
                    }
    
                }
            }
            
        }) 
        // console.log(`Today is ${year}-${month}-${day}`)
    })
}









export { handleTodayTasks }