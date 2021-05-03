cont db = require("../../data/dbConfig");

function getResources() {
    return db("resources")
}

function addResource() {
    return db("resources").insert(resource)
}

module.exports = {
    getResources,
    addResource
}