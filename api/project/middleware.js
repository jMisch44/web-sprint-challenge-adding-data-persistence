const Projects = require("./model.js");

const convertAllToBoolean = async (req, res, next) => {
    try {
        const projects = await Projects.getProjects();
        const convertedBoolArray = projects.map(project => {
            if(project.project_completed === 0) {
                return { ...project, project_completed: false }
            } else {
                return { ...project, project_completed: true }
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
        const project = await Projects.createProject(req.body);
        if(project.project_completed === 0) {
            req.body = project
            req.body.project_completed = false
            next()
        } else {
            req.body = project
            req.body.project_completed = true
            next()
        }
    } catch (err) {
        next(err)
    }
}

module.exports = {
    convertNewToBoolean,
    convertAllToBoolean
}
