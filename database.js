var mongoose = require('mongoose');
var config = require('./config')();

module.exports = function() {

	return {
		connect: connect
	}

	function connect(options, callback) {
		options = options || {};
		mongoose.connect(options.url || config.database.URI, function(err, status) {

			require(__dirname + '/models/chat');
			require(__dirname + '/models/state');
			require(__dirname + '/models/conversation');

			return callback(err, status)
		})
	}
}