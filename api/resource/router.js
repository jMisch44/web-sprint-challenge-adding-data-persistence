const express = require('express');
const Resources = require('./model.js');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try{
        const resources = await Resources.get();
        res.status(200).json(resources);
    } catch (err) {
        next(err)
    }
});

router.post('/', async (req, res, next) => {
    try {
        const data = await Resources.create(req.body)
        res.status(201).json(data)
    } catch (err) {
        next(err)
    }
});

module.exports = router;
