const mongoose = required('mongoose');

const ReviewSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    },
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Product',
        required: true
    },
    rating:{
        type: Number,
        required: true,
    },
    comment:{
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Review', ReviewSchema)