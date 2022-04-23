const mongoose = require('mongoose')

const Schema = mongoose.Schema

const journeySchema = new Schema({
    title:{
        type:String,
        required: true
    },
    author_id:{
        type:String,
        required: true
      
    },
    author_name:{
        type:String,
        required:true
    },

    milestones : [{
        step_no: Number,
        title:String,
        content:String
    }]

}, {timestamps:true})

const Journey = mongoose.model('Journey', journeySchema)

module.exports = Journey;


