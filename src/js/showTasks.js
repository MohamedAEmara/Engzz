import { tasks } from "./tasks";



function showTasks() {
    const content = document.getElementById('content');
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    tasks.forEach(element => {
        console.log('show tasks called');
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
            
            // removeTaskListener();
        }
        
    })
}



export { showTasks };