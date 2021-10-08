const db = require("../../data/dbConfig.js");

function getTasks() {
    return db("tasks as t")
    .leftJoin("projects as p", "t.project_id", "p.project_id")
    .select(
        "task_id",
        "task_description",
        "task_notes",
        "task_completed",
        "p.project_name",
        "p.project_description"
    )
}

async function createTask(task) {
    const id = await db("tasks")
    .insert(task)
    return db("tasks")
    .where("task_id", id)
    .select(        
        "task_id",
        "task_description",
        "task_notes",
        "task_completed",
        "project_id"
    )
    .first()

}

module.exports = {
    getTasks,
    createTask
}
