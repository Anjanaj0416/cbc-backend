import mongoose from "mongoose";

const orderScheme = new mongoose.Schema({
    orderId :{
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true
    },
    orderedItems :[{
        name : {
            type : String,
            required : true
        
        },
        price :{
            type : Number,
            required : true
        },
        quantity :{
            type : Number,
            required : true
        }

    }],
    image :{
        type :String,
        required : false
    },
    date : {
        type : Date,
        default : Date.now
    },
    paymentId : {
        type : String,  
    },
    status : {
        type : String,
        default : "preparing"
    },
    notes : {
        type : String,  
    },
    name : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true 
    }
})

const Order = mongoose.model ("orders", orderScheme);

export default Order;