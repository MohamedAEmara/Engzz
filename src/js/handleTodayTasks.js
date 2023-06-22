// import { showTasks } from "./showTasks";
import { tasks } from "./tasks";
const { format, addDays, isThisWeek, differenceInDays, parseISO } = require('date-fns');


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
        // show all tasks that has date same as today
        // tasks.forEach(element => {
        //     if(date == element.date) {
        //     console.log("yessssssssssssssssssss");
        //     const line = document.createElement('div');
        //     const name = document.createElement('div');
        //     const date = document.createElement('div');
        //     const level = document.createElement('div');
        //     const check = document.createElement('button');
        //     line.classList.add('task');
        //     name.innerHTML = element.title;
        //     date.innerHTML = element.date;
        //     level.innerHTML = element.priority;
        //     check.innerHTML = " ";
        //     line.appendChild(name);
        //     line.appendChild(date);
        //     line.appendChild(level);
        //     line.appendChild(check);
        //     content.appendChild(line);
        //     }    
        //     else {
        //         console.log(element.date + "  " + date);

        //     }        
        // })

        tasks.forEach(element => {
            if(date == element.date) {
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
            
        }) 
        // console.log(`Today is ${year}-${month}-${day}`)
    })
}









export { handleTodayTasks }