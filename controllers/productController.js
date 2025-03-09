import Product from "../models/product.js";
import {isAdmin} from "./userController.js";


export function createProduct(req,res){

    if (!isAdmin(req)){
        res.json({
            message : "please loging as a administartor"
            
        })
        return
    }
    const newProductData = req.body
    const product = new Product(newProductData)

    product.save().then(()=>{
        res.json({
            message : "product created"
        })

    }).catch((error)=>{
        res.status(403).json({
            message : error
        })
    })
}
 export function getProducts(req,res){
    Product.find({}).then((products)=>{
        res.json(products)
    })

 }

 export function deleteProduct(req,res){
    if(!isAdmin(req)){
        res.json({
            message : "please loging as a administartor"
        })
        return
 }
    const productId = req.params.productId
    Product.deleteOne(
        {productId : productId}
    ).then(()=>{
        res.json({
            message : "product deleted"
        })        
    }).catch((error)=>{
        res.status(403).json({
            message : error
    })
    })

 }

 export function updateProduct(req, res) {
    if (!isAdmin(req)) {
      res.status(403).json({
        message: "Please login as administrator to update products",
      });
      return;
    }
  
    const productId = req.params.productId;
    const newProductData = req.body;
  
    Product.updateOne({ productId: productId }, newProductData)
      .then(() => {
        res.json({
          message: "Product updated",
        });
      })
      .catch((error) => {
        res.status(403).json({
          message: error,
        });
      });
  }

  export async function getProductByID(req,res){

    try{
        const productId = req.params.productId

        const product = await Product.findOne({productId : productId})
        res.json(product)

    }catch(error){
        res.status(500).json({
            message : error
        })
    }

    }



