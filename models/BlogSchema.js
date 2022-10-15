const mongoose = require('mongoose')


const blogSchema = mongoose.Schema({
    Title: {type: String, required: true},
    Blog: {type: String, required: true},
    Author: {type: String, required: true},
    Likes: {type: Number, default: 0},
    Hometown: {type: String, required: false},   
},
{ timestamps: {createdAt: 'created_at'}}
)


module.exports = mongoose.model('Blog', blogSchema)