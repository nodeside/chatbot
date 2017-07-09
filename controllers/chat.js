var mongoose = require('mongoose')

module.exports = {
	get: get,
	list: list,
	create: create,
	update: update,
	remove: remove
};

function get(req, res, next) {
	var Chat = mongoose.model('Chat');

	Chat.findOne({_id:req.params.id}).exec(function(err, item) {
		res.status(200).json(item);
	})
}

function list(req, res, next) {
	var Chat = mongoose.model('Chat');

	Chat.find().limit(100).skip(0).exec(function(err, items) {
		res.status(200).json({
			limit: 100,
			skip: 0,
			items: items
		});
	})

}

function create(req, res, next) {
	var Chat = mongoose.model('Chat');

	var chat = new Chat({
		name: req.body.name
	});


	chat.save(function(err) {

		if (err) {
			return next(err);
		}

		return res.send(chat);
	});
}

function update(req, res, next) {

}

function remove(req, res, next) {

}