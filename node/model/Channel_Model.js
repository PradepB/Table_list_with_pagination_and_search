const mongoose = require("mongoose")
mongoose.Promise = global.Promise
const Schema = mongoose.Schema
const Channel_Schema = new Schema({
    "Rank" : {type:String}, 
    "Grade" : {type:String},  
    "Channel_name" : {type:String}, 
    "Video_Uploads" : {type:Number}, 
    "Subscribers" : {type:String}, 
    "Video_views" : {type:Number}
},
{
        collection:'channels_yt1e0298c',
    })

module.exports = mongoose.model("Channel",Channel_Schema)