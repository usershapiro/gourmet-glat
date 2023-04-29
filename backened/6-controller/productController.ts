import express, { NextFunction, Request, Response } from "express";
import productLogic from "../5-logic/productLogic";
import ProductModel from "../4-models/productModel";

const router = express.Router()
//listen on http://localhost:3001/api/categories        
router.get("/categories" , async(request:Request , response:Response , next:NextFunction)=>{
try{
   const categories = await productLogic.getAllCategories()
   response.json(categories)


}
catch(err:any){
    next(err)
}
})

//listen on http://localhost:3001/api/product-by-category/:categoryId
router.get("/product-by-category/:categoryId",async(request:Request , response:Response , next:NextFunction)=>{
   try{
    const categoryId = +request.params.categoryId
    const productByCategory = await productLogic.getProductByCategory(categoryId)
    response.json(productByCategory)
   }
   catch(err:any){
    next(err);
   }
   
})

//listen on http://localhost:3001/api/products
router.post("/products" , async(request:Request , response:Response , next:NextFunction)=>{
  try{
    const product = new ProductModel(request.body)
    const addedProduct = await productLogic.addProduct(product)
    response.status(201).json(addedProduct)
  }
  catch(err:any){
    next(err);
  }
  
    
}) 

//listen on http://localhost:3001/api/delete-product/
router.delete("/delete-product/:productId",async(request:Request , response:Response , next:NextFunction)=>{
 try{
      const productId = +request.params.productId
      await productLogic.deleteProduct(productId)
      response.json(204)
      
 }
 catch(err:any){
    next(err)
 }
})


export default router