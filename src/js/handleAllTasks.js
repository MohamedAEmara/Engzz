// import { tasks } from "./tasks";

// const allTasks = document.getElementById('inbox');
// const content = document.getElementById('content');

// function handleAllTasks() {
    
//     allTasks.addEventListener('click', function(){
//         // clear content section first
//         while(content.hasChildNodes()) {
//             content.removeChild(content.childNodes[0]);
//         }
//         tasks.forEach(element => {
//             const line = document.createElement('div');
//             const name = document.createElement('div');
//             const date = document.createElement('div');
//             const level = document.createElement('div');
//             const check = document.createElement('button');
//             line.classList.add('task');
//             name.innerHTML = element.title;
//             date.innerHTML = element.date;
//             level.innerHTML = element.priority;
//             check.innerHTML = " ";
//             line.appendChild(name);
//             line.appendChild(date);
//             line.appendChild(level);
//             line.appendChild(check);
//             content.appendChild(line);
//         }) 
//     })
// }


// export {handleAllTasks};



import { tasks } from "./tasks";
const { format, addDays, isThisWeek, differenceInDays, parseISO } = require('date-fns');

const allTasks = document.getElementById('inbox');
const content = document.getElementById('content');

function handleAllTasks() {
    
    allTasks.addEventListener('click', function(){
        // clear content section first
        while(content.hasChildNodes()) {
            content.removeChild(content.childNodes[0]);
        }
        const all = document.createElement('div');
        all.innerHTML = "All Tasks";
        content.appendChild(all);
        tasks.forEach(element => {
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
        }) 
    })
}


export {handleAllTasks};