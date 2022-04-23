const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    saved_journeys:{
        type:[{
        journey_id :Number,
        journey_progress:Number
        }],
    default: []}

}, {timestamps:true})

const User = mongoose.model('User', userSchema)

module.exports = User;


