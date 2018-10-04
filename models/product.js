// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Product = new Schema({
    id: { type: String},
    title: { type: String, min: 18, index: true },
    price: { type: Number},
    inventry: { type: Number },
  });

  // the schema is useless so far
// we need to create a model using it
//var Product = mongoose.model('products', Product);

// make this available to our Products in our Node applications
  module.exports = Product;