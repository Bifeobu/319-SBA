const { Schema, model } = require('mongoose');



const commentSchema = new Schema({
    content: {
        type: String,
        required: true,
        max: 500
    },
    author: {
        type: String
    }
})

//model to control this collection
const Comment = model("Comment", commentSchema);

module.exports = Comment;