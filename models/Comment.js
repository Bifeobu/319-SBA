const { Schema, model } = require('mongoose');



const commentSchema = new Schema({
    content: {
        type: String,
        max: 500
    },
    author: {
        type: String,
        required: true
    }
})