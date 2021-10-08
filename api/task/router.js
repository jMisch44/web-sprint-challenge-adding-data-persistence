const express = require("express");
const { convertAllToBoolean, convertNewToBoolean } = require("./middleware.js");
const router = express.Router();

router.get("/", convertAllToBoolean, (req, res) => {
    res.status(200).json(req.body)
});

router.post("/", convertNewToBoolean, (req, res) => {
    res.status(201).json(req.body)
});

module.exports = router;
