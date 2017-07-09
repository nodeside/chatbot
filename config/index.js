

var _ = require('lodash');

module.exports = function() {
	return _.merge({}, require('./all.json'));
}