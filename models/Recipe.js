const { Schema, model } = require('mongoose');

const schema = new Schema({
    date: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    ingredients: {
        type: Array,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    oldRecipe: {
        type: Array,
        required: false
    },
})

module.exports = model('Recipe', schema)