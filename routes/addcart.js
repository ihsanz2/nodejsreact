const router = require('express').Router();
const connection = require ('../app/database');

router.post ('/',function(req,res){
    connection.query('insert into cart set?',{
        user_id:req.body.user_id,
        size_product:req.body.size_product,
        quantity:req.body.quantity,
        harga:req.body.harga
    })
})

module.exports = router;