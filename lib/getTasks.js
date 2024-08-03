const taskState = require('./taskState');

const getTasks = () => {
    return taskState.tasks;
}

const getTaskById = (id) => {
    return taskState.tasks.find((task) => task.id === id);
}

module.exports = {
    getTasks,
    getTaskById
}