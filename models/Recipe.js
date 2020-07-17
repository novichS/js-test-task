const { Schema, model } = require('mongoose');

const schema = new Schema({
    id: {
        type: Number,
        required: false
    },
    date: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    },
    oldRecipe: {
        type: Array,
        required: false
    },
    isToggled: {
        type: Boolean,
        required: false
    }
}, {
        timestamps: false,
})

module.exports = model('Recipe', schema)