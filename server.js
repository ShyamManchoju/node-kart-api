var express = require('express')
const mongoose = require('mongoose');
var Product = require('./models/product');
//var Promise = require('promise');
const cors = require('cors');
var app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
//mongodb://admin:admin$123@ds045454.mlab.com:45454/shopping_kart
//mongodb://localhost/ShoppingKart
mongoose.connect('mongodb://admin:admin123@ds045454.mlab.com:45454/shopping_kart', {userNewUrlParser: true}, ()=>{
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


 
app.listen(PORT,()=>{
    console.log("Server stareted on PORT : ", PORT);
});