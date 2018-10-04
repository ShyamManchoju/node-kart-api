var express = require('express')
const mongoose = require('mongoose');
var Product = require('./models/product');
//var Promise = require('promise');
const cors = require('cors');
var app = express();

app.use(cors());
mongoose.connect('mongodb://localhost/ShoppingKart', {userNewUrlParser: true}, ()=>{
    console.log('MongoDB connected !!!');
});


// selecting the 'name' and 'age' fields
var ProductModel = mongoose.model('products', Product );
//query.select('id title price inventry');


app.get('/products', function (req, res) {
    
    ProductModel.find().then(function(data){
        console.log("inside tasks then", data);
        res.send(data);
    }).catch(function(error){
        console.log("inside tasks catch");
        res.status(400).send(error);
    });
 
})


 
app.listen(4000)