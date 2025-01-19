import Product  from "../models/product.js";

export function getProduct(req,res){

  Product.find().then(

    (productList)=>{
      res.status(200).json({
        list : productList
      }) 
    }
  ).catch(
    (err)=>{
      res.json({
        message : "Error"
      })
    }
  )
}

export function createProduct(req,res){
  console.log(req.user)

  if (req.user == null){
    res.json({
      message : "yot are not log in"
    })
    return
  }
  if(req.user.type != "admin"){
    res.json({
      message : "you are not an abmin"
    })
    return
  }


  const product = new Product(req.body)

  product.save().then(()=>{
    res.json({
      message: "Product created"
    })
  }).catch(()=>{
    res.json({
      message: "Product not created"
    })
  })
}

export function deleteProduct(req,res){
  Product.deleteOne({name : req.body.name}).then(
    ()=>{
      res.json(
        {
          message : "Product deleted successfully"
        }
      )
    }
  ).catch(
    ()=>{
      res.json(
        {
          message : "Product not deleted"
        }
      )
    }
  )
}