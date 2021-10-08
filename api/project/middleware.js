const Projects = require("./model.js");

const convertToBoolean = async (req, res, next) => {
    try {
        const project = await Projects.createProject(req.body);
        if(project.project_completed === 0) {
            req.body.project_completed = false
            next()
        } else {
            req.body.project_completed = true
            next()
        }
    } catch (err) {
        next(err)
    }
}

module.exports = {
    convertToBoolean
}
