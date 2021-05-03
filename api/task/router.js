const express = require("express")
const db = require("./model")
const router = express.Router()

router.get("/task", async (req, res, next) => {
    try {
        await db.getTasks()
        .then((task) => {
            res.status(200).json(task)
        })
    }
    catch (err) {
        next(err)
    }
})

router.post("/task", async (req, res, next) => {
    try {
        await db.addTask(req.body)
            .then((task) => {
                res.status(200).json(task)
            })
    }
    catch(err) {
        next(err)
    }
})

module.exports = router;