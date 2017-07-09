var chat = require('./chat');
var state = require('./state');

module.exports = function(app) {

	app.use('/chat', chat);
	app.use('/state', state);


}