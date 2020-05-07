const mongoose = require('mongoose');
var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    /*name:{
    	type:String,
        required:true
    },
    image:{
    	type:string
    }*/

    email: { 
        type: String, 
        required: [true,"can't be blank"], 
        unique: true, 
        index:true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: {
     type: String,
      required: [true,"can't be blank"], 
       index:true
        }
/*number:{
    	type:tel,
    	required:true,
    	match:
    }*/
},{timestamps:true});

UserSchema.plugin(uniqueValidator, {message: 'is already taken.'});

module.exports = mongoose.model('User', userSchema);