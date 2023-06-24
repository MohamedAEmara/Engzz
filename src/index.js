import './styles.css';
import headerImgg from "./images/logo.svg";
import githubImgg from "./images/github.png";
import inboxImgg from "./images/omar.svg";
import weekImgg from "./images/week.svg";
import todayImgg from "./images/today.svg";

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
import { handleTodayTasks } from './js/handleTodayTasks';
import { handleSubmitTask } from './js/handleSubmitTask';
import { handleCancelTask } from './js/handleCancelTask';
import { showWeekTasks } from './js/showWeekTasks';
import { removeTask } from './js/removeTask';
import { handleWeekTasks } from './js/handleWeekTasks';

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


handleSubmitTask();

handleCancelTask();
handleFormBtnClick();

handleAllTasks();

headerImg.src = headerImgg;
footerImg.src = githubImgg;
inboxImg.src = inboxImgg;
todayImg.src = todayImgg;
weekImg.src = weekImgg;

const a = new task("Study lecture 7 in Database", '2023-06-24', 'op1');

console.log(tasks);

// showTasks();


handleTodayTasks();

const c = new Project("Courses");
const d = new Project("Home");

showProjects();


// const weekTasks = document.getElementById('week');
// weekTasks.addEventListener('click', showWeekTasks());
// showWeekTasks();
handleWeekTasks();
handleAllTasks();

projectClickListener();

