const express = require("express");
const { convertAllToBoolean } = require("./middleware.js");
const router = express.Router();

router.get("/", convertAllToBoolean, (req, res, next) => {
    res.status(200).json(req.body)
});

router.post("/", (req, res, next) => {
    res.status(201).json("post tasks")
});

module.exports = router;
