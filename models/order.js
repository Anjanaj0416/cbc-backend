import mongoose from "mongoose";

const orderScheme = mongoose.SchemaType({
    orderId :{
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true
    },
    orderedItmes :[{
        name : {
            type : String,
            required : true
        
        },
        price :{
            typr : Number,
            required : true
        },
        quentity :{
            type : Number,
            required : true
        }

    }],
    image :{
        type :String,
        required : true
    },
    date : {
        type : date,
        default : Date.now
    },
    paymentId : {
        type : String,  
    },
    status : {
        type : String,
        default : "preparing"
    },
    nates : {
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
        requried : true 
    }
})

const Order = mongoose.model ("orders", orderScheme);

