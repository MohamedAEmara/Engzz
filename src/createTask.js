// createTask.js

import {tasks} from "./tasks";


class task {
    constructor(title, date, priority) {
        this.id = tasks.length;
        this.title = title;
        this.date = date;
        this.priority = priority;
        this.createTask(this);
    }
    createTask() {
        tasks.push(this);
    }
}

export {task};
