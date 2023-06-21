import { tasks } from "./tasks";
const { format, addDays, isThisWeek, differenceInDays, parseISO } = require('date-fns');



function showWeekTasks() {
    // while(content.hasChildNodes()) {
    //     content.removeChildNode(content.childNodes[0]);
    // }


    // const element = document.getElementById('myElement');
        content.innerHTML = "";
        while (content.firstChild) {
            content.removeChild(content.firstChild);
        }

    tasks.forEach(task => {
        const date = task.date;
        const lowerBound = new Date();
        const upperBound = addDays(lowerBound, 7);
        
        const lb = format(lowerBound, 'yyyy-MM-dd');
        const up = format(upperBound, 'yyyy-MM-dd');

        const date1 = parseISO(lb);
        const date2 = parseISO(up);
        const currDate =parseISO(date);

        const diff1 = differenceInDays(date2, currDate);
        const diff2 = differenceInDays(currDate, date1);

        console.log(lb);
        console.log(up);
        console.log(date);
        console.log();

        if(diff1 >= 0 && diff2 >= 0) {    // task is in <= 7 days due date
            const line = document.createElement('div');
            const name = document.createElement('div');
            const date = document.createElement('div');
            const level = document.createElement('div');
            const check = document.createElement('button');
            line.classList.add('task');
            name.innerHTML = task.title;
            date.innerHTML = task.date;
            level.innerHTML = task.priority;
            check.innerHTML = " ";
            line.appendChild(name);
            line.appendChild(date);
            line.appendChild(level);
            line.appendChild(check);
            content.appendChild(line);
        }
    });
}

export { showWeekTasks };