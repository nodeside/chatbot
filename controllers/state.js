var mongoose = require('mongoose')

module.exports = {
	get: get,
	list: list,
	create: create,
	update: update,
	remove: remove
};

function get(req, res, next) {
	var State = mongoose.model('State');

	State.findOne({
		_id: req.params.id
	}).populate('state').exec(function(err, item) {
		res.status(200).json(item);
	})
}

function list(req, res, next) {
	var State = mongoose.model('State');

	State.find().limit(100).skip(0).populate('state').exec(function(err, items) {
		res.status(200).json({
			limit: 100,
			skip: 0,
			items: items
		});
	})

}

function create(req, res, next) {
	var State = mongoose.model('State');

	var state = new State({
		name: req.body.name,
		chat: req.body.chat
	});


	state.save(function(err) {

		if (err) {
			return next(err);
		}

		State.populate(state, {
			path: 'chat'
		}, function(err, state) {
			return res.send(state);
		})

	});
}

function update(req, res, next) {

}

function remove(req, res, next) {

}