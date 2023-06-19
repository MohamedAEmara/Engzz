// createTask.js

import {tasks} from "./tasks";


class task {
    constructor(title, date, priority, list = 'noSection') {
        this.id = tasks.length;
        this.title = title;
        this.date = date;
        this.priority = priority;
        this.list = list;
        this.createTask(this);
    }
    createTask() {
        tasks.push(this);
    }
}

export {task};
