const { Schema, model } = require('mongoose');



const commentSchema = new Schema({
    content: {
        type: String,
    },
    author: {
        type: String,
        required: true
    }
})