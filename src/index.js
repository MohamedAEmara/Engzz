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
// import { handleAddTaskBtn } from './js/handleAddTaskBtn';

// const content = document.getElementById('heaeder');
const headerTxt = document.getElementById('headerText');
const headerImg = document.getElementById('headerIcon');
const footerTxt = document.getElementById('footerText');
const footerImg = document.getElementById('footerIcon');
const inboxImg = document.getElementById('inboxIcon');
const todayImg = document.getElementById('todayIcon');
const weekImg = document.getElementById('weekIcon');

const content = document.getElementById('content');

const addProjectBtn = document.getElementById('addProjectBtn');
const addProjectInput = document.getElementById('addProjectInput');



handleFormBtnClick();



headerImg.src = headerImgg;
footerImg.src = githubImgg;
inboxImg.src = inboxImgg;
todayImg.src = todayImgg;
weekImg.src = weekImgg;

const a = new task("sldfjkf", 11, 33);
const b = new task("dfffff", 5555, 666);

console.log(tasks);

showTasks();




const c = new Project("Courses");
const d = new Project("Home");

showProjects();

