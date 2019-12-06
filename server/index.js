const express = require('express');

//module.exports is an object, remember that; deconstructing it would be easier
const {getProducts} = require('./getProducts');
const {getProduct} = require('./getProduct');

//remember package.json is in the folder ABOVE where this index.js is
const products = require('../products.json');

//we are invoking the express function when we refer the app var name
const app = express();

/* What the fuck is an endpoint? I do need to GET for the method though.
According to the instructions, an endpoint consists of a method, path, and handler. 
I assume method is app.get(), path is file path, handler is callback function
it's better to spread your code, rather than have a function in the method as the handler, 
would be cleaner to have a file with that callback function. REMEMBER TO REFERENCE.*/
// app.get('/api/products', getProducts)
app.get(`/api/products`, getProducts)

app.get(`/api/products/:id`, getProduct)

app.listen(5555, () => {
   console.log(`Server listening on port: 5555`);
});

