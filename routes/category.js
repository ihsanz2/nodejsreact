const router = require ('express').Router();
const  connection = require ('../app/database');

router.get('/:id?' , function (req,res) {
    let sql = '';
    if (req.params.id === undefined) {
        sql = 'select * from category_season';
    }else{        
        sql = 'select * from category_season where ?';
    connection.query(sql, { id_season : req.params.id }, function(err,rows){
        res.json(rows);
    })
    }
});



module.exports = router;