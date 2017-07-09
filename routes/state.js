var express = require('express');
var router = express.Router();

var StateController = require('../controllers/state');

router.route('/')
	.post(StateController.create)
	.get(StateController.list);

router.route('/:id')
	.get(StateController.get)
	.put(StateController.update)
	.delete(StateController.remove);

module.exports = router;