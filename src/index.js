console.log("beginning");

import './styles.css';
import headerImgg from "./images/to-do-list.png";
import githubImgg from "./images/github.png";
import inboxImgg from "./images/inbox.png";
import weekImgg from "./images/week.png";
import todayImgg from "./images/calendar.png";

import {tasks} from "./tasks.js";
import {task, createTask} from "./createTask";
import {showTasks} from './showTasks';


// const content = document.getElementById('heaeder');
const headerTxt = document.getElementById('headerText');
const headerImg = document.getElementById('headerIcon');
const footerTxt = document.getElementById('footerText');
const footerImg = document.getElementById('footerIcon');
const inboxImg = document.getElementById('inboxIcon');
const todayImg = document.getElementById('todayIcon');
const weekImg = document.getElementById('weekIcon');

const content = document.getElementById('content');


headerImg.src = headerImgg;
footerImg.src = githubImgg;
inboxImg.src = inboxImgg;
todayImg.src = todayImgg;
weekImg.src = weekImgg;

const a = new task("sldfjkf", 11, 33);
const b = new task("dfffff", 5555, 666);

console.log(tasks);

showTasks();
