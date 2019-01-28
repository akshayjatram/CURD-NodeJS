var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bizSchema = new Schema({
    name :{
        type: String,
        unique : false,
        required : true
    },
    description : {
        type: String,
        unique : false,
        required : true
    },
    amount : {
		type: Number,
		unique : false,
        required : true
		
	},
	dateOfOpening : {
		type:String,
		unique : false,
        required : true
	},
	weight : {
		type:String,
		unique : false,
        required : true
	}
		
}, {
    timestamps: true
});

module.exports = bizSchema;
