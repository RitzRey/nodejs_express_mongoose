const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: String,
    author: {
        type: String,
        required: true,
        lowercased: true
    },
    price: Number,
    published_date: Date
})

// exports as mongoose model for books using bookSchema
module.exports = mongoose.model("book", bookSchema)