const taskState = require('./taskState');

const addTask = (title, description, dueDate) => {
    taskState.tasks.push({
        id: taskState.counter++,
        title, 
        description,
        dueDate,
        completed: false
    });
}

module.exports = addTask;

