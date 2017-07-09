var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var Chat = new Schema({

    //User - for now there is no user management
    name: {
        type: String,
        unique: true,
        required:true
    },
    description: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    }

});


module.exports = mongoose.model('Chat', Chat);