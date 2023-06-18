import './styles.css';
import headerImgg from "./images/to-do-list.png";
import githubImgg from "./images/github.png";
import inboxImgg from "./images/inbox.png";
import weekImgg from "./images/week.png";
import todayImgg from "./images/calendar.png";


// import { compareAsc, format } from 'date-fns';

// format(new Date(2014, 1, 11), 'yyyy-MM-dd')
// //=> '2014-02-11'

// const dates = [
//   new Date(1995, 6, 2),
//   new Date(1987, 1, 11),
//   new Date(1989, 6, 10),
// ]

// dates.sort(compareAsc)

// console.log(dates);
//=> [
//   Wed Feb 11 1987 00:00:00,
//   Mon Jul 10 1989 00:00:00,
//   Sun Jul 02 1995 00:00:00
// ]

// const content = document.getElementById('heaeder');
const headerTxt = document.getElementById('headerText');
const headerImg = document.getElementById('headerIcon');
const footerTxt = document.getElementById('footerText');
const footerImg = document.getElementById('footerIcon');
const inboxImg = document.getElementById('inboxIcon');
const todayImg = document.getElementById('todayIcon');
const weekImg = document.getElementById('weekIcon');

headerImg.src = headerImgg;
footerImg.src = githubImgg;
inboxImg.src = inboxImgg;
todayImg.src = todayImgg;
weekImg.src = weekImgg;

// headerTxt.innerHTML = "Hello, there";




