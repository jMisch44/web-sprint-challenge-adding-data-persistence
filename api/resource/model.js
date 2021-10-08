const db = require('../../data/dbConfig');

function get() {
    return db("resources")
    .select("resource_id", "resource_name", "resource_description")
}

function create(resource) {
    const data = db("resources").insert(resource);
    return data
}

module.exports = {
    get,
    create,
}
