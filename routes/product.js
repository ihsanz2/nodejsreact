
const router = require ('express').Router();
const  connection = require ('../app/database');

router.get('/:id?' , function (req,res) {
        let sql='';
        if (req.params.id === undefined) {
            sql = 'select * from product';
        }
        else {
            sql = 'select * from product where ?';
        }
        connection.query(sql, { id_category_season : req.params.id }, function(err,rows){
            res.json(rows);
        })
    });



module.exports = router;