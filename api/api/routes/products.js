    const express=require('express');
    const router=express.Router();
    const uuid=require('uuid');
    const ProductsController= require('../controllers/products');

    //Get Product List
    
    router.get('/',ProductsController.getAllProducts);

    
    //Post Single Product

    router.post('/',ProductsController.addProduct);
    
    //Get Single Product

    router.get('/:productId',ProductsController.getSingleProduct)

    //Updating Single Product

    router.patch('/:productId',ProductsController.updateProduct);

    //Deleting Single Product

    router.delete('/:productId',ProductsController.deleteProduct)

    module.exports=router;