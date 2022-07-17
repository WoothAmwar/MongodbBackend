const mongoose = require('mongoose');
require('mongoose-currency').loadType(mongoose);

const Schema = mongoose.Schema;
const Currency = mongoose.Types.Currency;

// Sub-document
const commentSchema = new Schema(
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
        }
    },
    {
        timestamps: true
    }
);

const dishSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true   // no two documents should have the same name field in there
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        label: {
            type: String,
            default: ''
        },
        price: {
            type: Currency,
            required: true,
            min: 0
        },
        featured: {
            type: Boolean,
            default: false
        },
        comments: [commentSchema]   // now every dish document can have an array of comments, or a comment collection
    },
    {
        timestamps: true
    }
);

var Dishes = mongoose.model("Dish", dishSchema);

module.exports = Dishes;