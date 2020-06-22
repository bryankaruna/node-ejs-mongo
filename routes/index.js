const express = require('express');
const router = express.Router();

//includes controller
const data_controller = require('../controllers/index');

// Normal get and post
router.get('/', data_controller.get_data);
router.post('/', data_controller.post_data);

module.exports = router;