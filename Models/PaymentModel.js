const mongoose = required("mongoose");

const PaymentSchema = new mongoose.Schema({

    user:{
        type:mongoose.Schema.Type.ObjectId,
        ref:'User',
        required: true
    },
    order:{
        type: mongoose.Schema.Type.ObjectId,
        ref: 'Order',
        required: true,
    },
    amount:{
        type:Number,
        required:true
    },
    paymentMethod:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        default:'pending',
    }, 
    timestamp:{
        type:Date,
        default:Date.now,
    }
    

})

module.exports = mongoose.model("Payment",PaymentSchema);