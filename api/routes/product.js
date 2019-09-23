const express= require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.status(200).json({
        message:'Handling GET request to /products'
    });
});

router.get('/:productId',(req, res, next) => {
   const productId= req.params.productId;
   console.log("Product Id: "+productId);
   if(productId === 'special'){
        res.status(200).json({
            message:'You have sent special id'
        });
   }else{
    res.status(200).json({
        message:'You have sent a number'
    });
   }
});

router.post('/',(req, res, next) => {
    res.status(200).json({
        message:'Handling POST request to /products'
    });
});

module.exports=router;