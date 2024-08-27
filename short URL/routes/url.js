const express = require('express')
const {handlegeneratenewShortURL} = require('../controllers/url')

const router = express.Router();
router.post('/', handlegeneratenewShortURL);

module.exports = router;