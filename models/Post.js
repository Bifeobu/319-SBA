const { Schema, model } = require('mongoose');



const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
        min: 4,
        max: 500,
    },
    author: {
        type: String,
        required: true,
    }

})

//model to control this collection
const Post = model("Post", postSchema);

module.exports = Post