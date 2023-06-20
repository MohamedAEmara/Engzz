// import { task } from './createTask';

const btn = document.getElementById('addTask');
const popup = document.getElementById('popup');

function handleAddTaskBtn() {
    console.log('in handle click add task btn');
    btn.addEventListener('click', () => {
        console.log('add task clicked');
        popup.classlist.add('active');   
    });
}


export { handleAddTaskBtn };