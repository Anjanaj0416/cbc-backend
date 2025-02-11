import mongoose from "mongoose";
const ptoductSchema = mongoose.Schema({
    productId : {
        type: String,
        required : true,
        unique : true,
    },
    productName:{
        type : String,
        requried : true
    },
    altNames : [{
        type: String
    }],
    images : [{
        type : String
    }],
    price :{
        type : Number,
        required :true  
    },
    lastPrice :{
        type : Number,
        required : true
    }

})

const   Product = mongoose.model ("products", productScheme);

export default Product;