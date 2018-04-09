const router = require('express').Router();
const connection = require('../app/database');

router.get('/:id',function(req,res){
    let sql= '';

        sql = 'select * from warna where ?';
            connection.query(sql, { id_product : req.params.id }, function(err,warnaproduct){
            if (req.query.warnaid===undefined){
                sql='select * from product where ?'
                    connection.query(sql,{id:req.params.id}, function(err,product){
                    res.json({...product[0], warna_product:warnaproduct.map(x => x.warna_product)})
                })
            }else{
                connection.query(`select * from size where id_warna_product = ${req.query.warnaid}`,function(err,ukuranproduk){
                    console.log(warnaproduct)
                    res.json(ukuranproduk)
                })
            }
        })    
})


module.exports = router;