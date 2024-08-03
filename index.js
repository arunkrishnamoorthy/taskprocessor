const addTask = require('./lib/addTasks');
const {   
    getTasks,
    getTaskById 
} = require('./lib/getTasks');

module.exports = { addTask, getTasks, getTaskById };