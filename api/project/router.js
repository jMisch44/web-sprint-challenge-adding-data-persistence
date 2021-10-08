const express = require('express');
const { convertToBoolean } = require('./middleware');

const router = express.Router();

router.get('/', convertToBoolean, (req, res) => {
        res.status(200).json(req.projects)
});

router.post('/', convertToBoolean, (req, res) => {
        res.status(201).json(req.project)
})

module.exports = router;
