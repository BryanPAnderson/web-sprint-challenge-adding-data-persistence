const express = require("express");
const db = require("./model")
const router = express.Router();

router.get("/resource", async (req, res, next) => {
    try {
        await db.getResources()
        .then((resource) => {
            res.status(200).json(resources)
        })
    }
    catch (err) {
        next(err)
    }
})

router.post("/resource", async (req, res, next) => {
    try {
        await db.addResource(req.body)
            .then((resource) => {
                res.status(201).json(resource)
            })
    }
    catch (err) {
        next(err)
    }
})

module.exports = router;