const db = require("../../data/dbConfig");

function getTasks() {
    return db("task")
}

function addTask() {
    return db("task").insert()
}

module.exports = {
    getTasks,
    addTask
}