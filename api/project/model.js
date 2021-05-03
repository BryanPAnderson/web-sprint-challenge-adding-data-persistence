const db = require("../../data/dbConfig");

function getProjects() {
    return db("projects")
}
function addProject() {
    return db("projects").insert(project)
}

module.exports = {
    getProjects,
    addProject
}