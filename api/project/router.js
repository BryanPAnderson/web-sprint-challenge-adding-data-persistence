const express = require("express")
const db = require("./model");
const router = express.Router()

router.get("/project", async (req, res, next) => {
    try {
        await db.getProjects()
            .then((projects) => {
                res.status(200).json(project)
            })
    }
    catch (err) {
        next(err)
    }
})

router.post("/project", async (req, res, next) => {
    try {
        await db.addProject(req.body)
            .then((project) => {
                res.status(201).json(project)
            })
    }
    catch (err) {
        next(err)
    }
})

module.exports = router;