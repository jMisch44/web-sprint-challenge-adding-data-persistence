const db = require("../../data/dbConfig");

function getProjects() {
    return db("projects")
    .select(
        "project_id", 
        "project_name", 
        "project_description", 
        "project_completed"
    )
}

async function createProject(project) {
    const id = await db("projects").insert(project);
    return db("projects")
    .where("project_id", id)
    .select("project_id", "project_name", "project_description", "project_completed")
    .first()
}

module.exports = {
    getProjects,
    createProject
}
