// createTask.js

import {tasks} from "./tasks";


class task {
    constructor(title, date, priority, list = 'noSection') {
        this.id = tasks.length;
        this.title = title;
        this.date = date;
        this.priority = priority;
        this.list = list;
        this.complete = false;
        this.createTask(this);
    }
    createTask() {
        tasks.push(this);
        const strTasks = JSON.stringify(tasks);
        localStorage.setItem("tasks", strTasks);
    }
}

export {task};
