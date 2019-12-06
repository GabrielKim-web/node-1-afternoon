const products = require('../products.json');

let getProduct = (req, res) => {
   let sendBackProduct = products.filter((product) => product.id == Number(req.params.id))
   (sendBackProduct) ?
   res.status(200).json(sendBackProduct) :
   res.status(500).json("Item not in list");
}

module.exports = {
   getProduct
}