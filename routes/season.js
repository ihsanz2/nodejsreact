const router = require ('express').Router();
const  connection = require ('../app/database');


router.get('/' , function (req,res){
    var sql= 'select * from season';
    connection.query(sql,function(err,rows){
        console.log(rows)
        res.json(rows);
    })
});

module.exports=router;
