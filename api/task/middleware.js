const Tasks = require("./model.js")

const convertAllToBoolean = async (req, res, next) => {
    try {
        const tasks = await Tasks.getTasks();
        const convertedBoolArray = tasks.map(task => {
            if(task.task_completed === 0) {
                return { ...task, task_completed: false }
            } else {
                return { ...task, task_completed: true }
            }
        });
        req.body = convertedBoolArray;
        next()
    } catch (err) {
        next(err)
    }
}

const convertNewToBoolean = async (req, res, next) => {
    try {
        const task = await Tasks.createTask(req.body);
        req.body = task;
        if(task.task_completed === 0) {
            req.body.task_completed = false;
            next()
        } else {
            req.body.task_completed = true;
            next()
        }
    } catch (err) {
        next(err)
    }
}

module.exports = {
    convertAllToBoolean,
    convertNewToBoolean
}
