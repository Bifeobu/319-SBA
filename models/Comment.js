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

//model to control this collection
const Comment = model("Comment", commentSchema);

module.exports = Comment;