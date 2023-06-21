console.log("beginning");

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
// import { handleAddTaskBtn } from './js/handleAddTaskBtn';
import { handleTodayTasks } from './js/handleTodayTasks';
import { handleSubmitTask } from './js/handleSubmitTask';
import { handleCancelTask } from './js/handleCancelTask';
import { showWeekTasks } from './js/showWeekTasks';

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


handleSubmitTask();

handleCancelTask();
handleFormBtnClick();

handleAllTasks();

headerImg.src = headerImgg;
footerImg.src = githubImgg;
inboxImg.src = inboxImgg;
todayImg.src = todayImgg;
weekImg.src = weekImgg;

// const a = new task("sldfjkf", '2023-04-10', 33);
// const b = new task("dfffff", '2020-10-12', 666);

console.log(tasks);

showTasks();


handleTodayTasks();

const c = new Project("Courses");
const d = new Project("Home");

showProjects();

const weekTasks = document.getElementById('week');
weekTasks.addEventListener('click', showWeekTasks);

// const { format, addDays } = require('date-fns');

// const today = new Date();
// const thisWeek = addDays(today, 7);

// const formattedToday = format(today, 'yyyy-MM-dd');
// console.log(formattedToday);
// const formattedAfterWeek = format(thisWeek, 'yyyy-MM-dd');
// console.log(formattedAfterWeek);


// console.log(today);
// const tomorrow = addDays(today, 1);
// // const formattedDate = format(tomorrow, 'MMMM do, yyyy');


// // console.log(`Tomorrow is ${formattedDate}`);



// const {  } = require('date-fns');

// // To get positive differecne ===> the first date is before the second date
// const date1 = new Date('2024-06-01');
// const date2 = new Date('2023-06-10');
// const diffInDays = differenceInDays(date2, date1);
// //  date2 - date1

// console.log(`The difference in days between ${date1} and ${date2} is ${diffInDays}.`);