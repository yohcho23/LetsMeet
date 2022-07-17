const mongoose = require('mongoose');

const meetings = new mongoose.Schema(
    {
        name: {type: String, required: true},
        duration: {type: Number},
        admin: {type: String},
        haveUploaded: [{
            user: {type:String}, 
            slots: [{type:Number}]
        }],
        haveNotUploaded: [{type:String}],
        range: [{type:Date},{type:Date}],
        slots:[{
            start: {type:Number},
            end: {type:Number}
        }]
    }, {collection: 'Meetings'}
);

const model = mongoose.model('Meetings', meetings);

module.exports = model;