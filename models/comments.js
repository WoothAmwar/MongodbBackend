const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Sub-document
var commentSchema = new Schema(
    {
        rating: {
            type: Number,
            min: 1,
            max: 5,
            required: true
        },
        comment: {
            type: String,
            required: true
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'  // will refer to users.js for this info
        },
        dish: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Dish'  // refer to dish model
        }
    },
    {
        timestamps: true
    }
);

var Comments = mongoose.model("Comment", commentSchema);
module.exports = Comments;

