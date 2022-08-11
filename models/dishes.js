const mongoose = require('mongoose');
require('mongoose-currency').loadType(mongoose);

const Schema = mongoose.Schema;
const Currency = mongoose.Types.Currency;

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
        }
    },
    {
        timestamps: true
    }
);

var Dishes = mongoose.model("Dish", dishSchema);

module.exports = Dishes;