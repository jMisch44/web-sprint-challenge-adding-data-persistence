const express = require('express');
const Resources = require('./model.js');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try{
        const data = await Resources.get();
        res.status(200).json(data);
    } catch (err) {
        next(err)
    }
});

router.post('/', (req, res, next) => {
    try {
        res.status(201).json("post resource")
    } catch (err) {
        next(err)
    }
});

module.exports = router;
