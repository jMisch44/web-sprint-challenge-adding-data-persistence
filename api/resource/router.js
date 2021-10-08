const express = require('express');
const Resources = require('./model.js');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try{
        const resources = await Resources.getResource();
        res.status(200).json(resources);
    } catch (err) {
        next(err)
    }
});

router.post('/', async (req, res, next) => {
    try {
        const newResource = await Resources.createResource(req.body)
        res.status(201).json(newResource)
    } catch (err) {
        next(err)
    }
});

module.exports = router;
