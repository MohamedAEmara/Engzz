// handleSubmitTask.js
import { task } from "./createTask";
import { showRelatedTasks } from "./showRelatedTasks";


function handleSubmitTask() {
    const popup = document.getElementById('popup');
    const all = document.getElementById('all');
    const submit = document.getElementById('submitPopup');
    submit.addEventListener('click', (event) => {
        // Prevent default form submission behavior
        event.preventDefault();
        // Retrieve input values from form fields
        const taskName = document.getElementById('taskName');
        let name = taskName.value;
        const dueDate = document.getElementById('dueDate');
        let date = dueDate.value;
        const priorityInput = document.getElementById('options');
        let priority = priorityInput.value;
        
        if(name == undefined ||  name == "" || date == undefined || date == "") {
            alert("please fill all fileds to add the task");
        } else {
            console.log('valid input');
            // now we want to add the related project of this task??
            // It's known from the first line in the content section
        
            let project = content.firstChild.textContent;
        
            const tmp = new task(name, date, priority, project);
            taskName.value = "";
            dueDate.value = "";
            console.log(tmp);
            // if form input are all valid and not missing
            // So, We'll close it
            // 1- Remove active class from popup
            // 2- Remove disable class from all
            popup.classList.remove('active');
            all.classList.remove('disable');
        }
});
}


export { handleSubmitTask };