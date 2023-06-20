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
        
});
}


export { handleCancelTask };