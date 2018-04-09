var express = require('express');
var app = express();

app.set('view engine', 'ejs');

var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var cors = require('cors');
app.use (cors());


//
let season = require('../routes/season');
app.use('/season',season)

let category = require('../routes/category');
app.use('/category',category)

let product = require('../routes/product');
app.use ('/product',product)

let detail = require('../routes/detail');
app.use ('/detail',detail)

let addcart = require('../routes/addcart');
app.use ('/addcart',addcart)



// const  connection = require ('./database');
// let tes = connection.query('select * from season', (err, val) => console.log(err, val))
app.listen(3001,(console.log('server jalan')))



