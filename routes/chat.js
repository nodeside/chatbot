var express = require('express');
var router = express.Router();

var ChatController = require('../controllers/chat');

router.route('/')
	.post(ChatController.create)
	.get(ChatController.list);

router.route('/:id')
	.get(ChatController.get)
	.put(ChatController.update)
	.delete(ChatController.remove);

module.exports = router;