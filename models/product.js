import mongoose from "mongoose";
const productSchema = mongoose.Schema({
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
    },
    description :{
        type: String
    }

})

const   Product = mongoose.model ("products", productSchema);

export default Product;

//john1.doe@example.com //john123