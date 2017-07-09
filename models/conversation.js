var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var Conversation = new Schema({
    chat: {
        type: Schema.Types.ObjectId,
        ref: 'Chat',
        required: true
    },
    currentState: {
        type: Schema.Types.ObjectId,
        ref: 'State',
        required: true
    },
    history: [{
        state: {
            type: Schema.Types.ObjectId,
            ref: 'State',
            required: true
        },
        created: {
            type: Date
        },
        result: {}
    }],
    description: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    }

});


module.exports = mongoose.model('Conversation', Conversation);