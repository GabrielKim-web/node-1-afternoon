//we need the products to send from products.json
const products = require('../products.json');

//when getProducts is being referenced in index.js, we invoke it here. CLEAN.
let getProducts = (req, res) => {
   if (req.query.price) {
      let filteredProducts = products.filter((product) => product.price >= Number(req.query.price)) 
      return res.status(200).send(filteredProducts)
   }
      return res.status(200).send(products); 
}

module.exports = {
   //remember to REFERENCE the function, NOT invoke it!
   getProducts
};