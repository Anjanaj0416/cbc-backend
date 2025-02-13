import Order from "../models/order.js";
import Product from "../models/product.js";
import { isCustomer } from "./userController.js"; 

export async function createOrder(req, res) {
    if (!isCustomer) {
      res.json({
        message: "Please login as customer to create orders",
      });
    }
    try {
      const latestOrder = await Order.find().sort({ orderId: -1 }).limit(1);
      console.log(latestOrder);
  
      let orderId;
  
      if (latestOrder.length == 0) {
        orderId = "CBC0001";
      } else {
        const currentOrderId = latestOrder[0].orderId;
  
        const numberString = currentOrderId.replace("CBC", "");
  
        const number = parseInt(numberString);
  
        const newNumber = (number + 1).toString().padStart(4, "0");
  
        orderId = "CBC" + newNumber;
      }

      const newOrederData = req.body;
    
      const newProductArray = []
  
      for (let i =0;i < newOrederData.orderedItems.length; i++){
        const product = await Product.findOne({productId : newOrederData.orderedItems[i].productId});
  
        if(product==null){
          res.json({
            message : "Product with id"+ newOrederData.orderedItems[i].productId+"not found"
          })
          return
        }
        newProductArray[i] ={
          name : product.productName,
          price : product.price,
          quantity : newOrederData.orderedItems[i].quantity,
          image : product.image[i] 
        }
      }
      console.log(newProductArray)
  
      newOrederData.orderedItems = newProductArray;
        
      const newOrderData = req.body
        
      newOrderData.orderId = orderId
        
      newOrderData.email = req.user.email

        
      const order = new Order(newOrderData)
 
        
      await order.save()

        
      return res.json({
        message : "Order created"
      });
    }catch(error){
      res.status(500).json({
        message: error.message
        });
    }
}