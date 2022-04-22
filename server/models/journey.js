const mongoose = require('mongoose')

const Schema = mongoose.Schema

const journeySchema = new Schema({
    title:{
        type:String,
        required: true
    },
    author_id:{
        type:String,
      
    },
    milestones : [{
        step_no: Number,
        title:String,
        content:String
    }]

})

const Journey = mongoose.model('Journey', journeySchema)

module.exports = Journey;


