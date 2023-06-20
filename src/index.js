console.log("beginning");

import './styles.css';
import headerImgg from "./images/to-do-list.png";
import githubImgg from "./images/github.png";
import inboxImgg from "./images/inbox.png";
import weekImgg from "./images/week.png";
import todayImgg from "./images/calendar.png";

import {tasks} from "./js/tasks.js";
import {task, createTask} from "./js/createTask";
import {showTasks} from './js/showTasks';
import { projects } from './js/projects';
import { Project } from "./js/createProject";
import { showProjects } from './js/showProjects';
import { projectClickListener } from './js/projectClickListener';
import { display } from './js/displayProject';
import { handleClick, handleFormBtnClick } from './js/handleAddListBtn';
import { handleAllTasks} from './js/handleAllTasks';
// import { handleAddTaskBtn } from './js/handleAddTaskBtn';
import { handleTodayTasks } from './js/handleTodayTasks';


// const content = document.getElementById('heaeder');
const headerTxt = document.getElementById('headerText');
const headerImg = document.getElementById('headerIcon');
const footerTxt = document.getElementById('footerText');
const footerImg = document.getElementById('footerIcon');
const inboxImg = document.getElementById('inboxIcon');
const todayImg = document.getElementById('todayIcon');
const weekImg = document.getElementById('weekIcon');
const inbox = document.getElementById('inbox');
const content = document.getElementById('content');
const popup = document.getElementById('popup');
const all = document.getElementById('all');
const addProjectBtn = document.getElementById('addProjectBtn');
const addProjectInput = document.getElementById('addProjectInput');


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
    
    // now we want to add the related project of this task??
    // It's known from the first line in the content section
    
    let project = content.firstChild.textContent;
    
    const tmp = new task(name, date, priority, project);
    
    console.log(tmp);
    // if form input are all valid and not missing
    // So, We'll close it
    // 1- Remove active class from popup
    // 2- Remove disable class from all
    popup.classList.remove('active');
    all.classList.remove('disable');
});


handleFormBtnClick();

handleAllTasks();

headerImg.src = headerImgg;
footerImg.src = githubImgg;
inboxImg.src = inboxImgg;
todayImg.src = todayImgg;
weekImg.src = weekImgg;

const a = new task("sldfjkf", 11, 33);
const b = new task("dfffff", 5555, 666);

console.log(tasks);

showTasks();


handleTodayTasks();

const c = new Project("Courses");
const d = new Project("Home");

showProjects();

