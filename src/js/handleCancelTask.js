// handleCancelTask.js
import { task } from "./createTask";


function handleCancelTask() {
    const popup = document.getElementById('popup');
    const all = document.getElementById('all');
    const cancel = document.getElementById('cancelTaskFrom');
    cancel.addEventListener('click', (event) => {
        // Prevent default form submission behavior
        event.preventDefault();

        popup.classList.remove('active');
        all.classList.remove('disable');
        // taskName dueDate options
        const taskName = document.getElementById('taskName');
        const dueDate = document.getElementById('dueDate');
        const options = document.getElementById('options');
        taskName.value = "";
        dueDate.value = "";
        options.value = "";
});
}


export { handleCancelTask };