import './styles.css';
import headerImgg from "./images/logo.svg";
import githubImgg from "./images/github.png";
import inboxImgg from "./images/omar.svg";
import weekImgg from "./images/week.svg";
import todayImgg from "./images/today.svg";
import { handleFormBtnClick } from './js/handleAddListBtn';
import {tasks} from "./js/tasks.js";
import {task} from "./js/createTask";
import { Project } from "./js/createProject";
import { showProjects } from './js/showProjects';
import { projectClickListener } from './js/projectClickListener';
import { handleAllTasks} from './js/handleAllTasks';
import { handleTodayTasks } from './js/handleTodayTasks';
import { handleSubmitTask } from './js/handleSubmitTask';
import { handleCancelTask } from './js/handleCancelTask';

import { handleWeekTasks } from './js/handleWeekTasks';
import { retrieveProjects } from './js/retrieveProjects';
import { retrieveTasks } from './js/retrieveTasks';

const headerImg = document.getElementById('headerIcon');
const footerImg = document.getElementById('footerIcon');
const inboxImg = document.getElementById('inboxIcon');
const todayImg = document.getElementById('todayIcon');
const weekImg = document.getElementById('weekIcon');


handleSubmitTask();

handleCancelTask();
handleFormBtnClick();

handleAllTasks();

headerImg.src = headerImgg;
footerImg.src = githubImgg;
inboxImg.src = inboxImgg;
todayImg.src = todayImgg;
weekImg.src = weekImgg;

let retP = retrieveProjects();
let retT = retrieveTasks();


if(retP == 0) {
    const c = new Project("Courses");
    const d = new Project("Spiritual");
} 



if(retT == 0) {
    const a = new task("Study lecture 7 in Database", '2023-06-24', 'op3', 'Courses');
    const b = new task('Recite Juz of Quran', '2023-06-24', 'op2', 'Spiritual');
}

    
console.log(tasks);

// showTasks();


handleTodayTasks();



showProjects();


// const weekTasks = document.getElementById('week');
// weekTasks.addEventListener('click', showWeekTasks());
// showWeekTasks();
handleWeekTasks();
handleAllTasks();

projectClickListener();

// const projectListener = document.getElementById('project');
// projectListener.addEventListener('click', (event) => {
    
// })