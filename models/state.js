var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var State = new Schema({

    //User - for now there is no user management
    name: {
        type: String,
        required: true
    },
    chat: {
        type: Schema.Types.ObjectId,
        ref: 'Chat',
        required: true
    },
    description: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    },    
    next: {
        type: Schema.Types.ObjectId,
        ref: 'State'        
    }

});


module.exports = mongoose.model('State', State);