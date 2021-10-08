const db = require('../../data/dbConfig');

function get() {
    return db("resources")
    .select("resource_id", "resource_name", "resource_description")
}

async function create(resource) {
    const id = await db("resources").insert(resource);
    return db("resources")
    .where("resource_id", id)
    .select("resource_id", "resource_name", "resource_description")
    .first()
}

module.exports = {
    get,
    create,
}
