const { Product } = require('../models/product.model');

//create
module.exports.createProduct = (req, res) => {
    console.log("You just created a product man")
    const { title, price, description } = req.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => res.json(product))
        .catch((err) => {
            res.json(err)
            console.log("Error! ERRRORRRR")
        });
}

//get all
module.exports.getAllProducts = (req, res) => {
    Product.find()
    .then(prods => res.json(prods))
    .catch(err => res.json(err))
}

//get one
module.exports.getOneProduct = (req, res) => {
    const idFromParams = req.params.id
    Product.findOne({_id: idFromParams})
    .then(oneproduct => res.json(oneproduct))
    .catch(err => res.json(err))
}

//update
module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(updatedValue => res.json(updatedValue))
    .catch(err => res.json(console.err))
}

//delete
module.exports.deleteProduct = (req, res) => {
    // const idFromParams = req.params.id
    Product.deleteOne({_id: req.params.id})
    .then(message => res.json(message))
    .catch(err => res.json(err))
}