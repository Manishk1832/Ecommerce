const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({

    productname:{
        type: String,
        required: true,
        maxLength: 32
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true,
        min: 0.01
    },
    category:{
        type: String,
        required: true,
        enum: ['Electronics', 'Cameras', 'Laptops', 'Accessories', 'Headphones', 'Food', 'Books', 'Clothes/Shoes', 'Beauty/Health', 'Sports', 'Outdoor', 'Home']
    },
    image:{
        type: String,
        required: true
    },
    stock:{
        type: Number,
        required: true,
        min: 0
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }
    ],
    attributes: [
        {
            key: String,
            value: String
        }
    ],  

},{
    timestamps: true
});

ProductSchema.index({ category: 1, name: 1 });

module.exports = mongoose.model('Product', ProductSchema)