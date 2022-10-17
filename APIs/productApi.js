const exp = require('express')
const productApp = exp.Router();
// const verifyToken = require('../middlewares/verifyToken')

//import express async handler
const expressAsyncHandler = require('express-async-handler')


productApp.get('/getProducts', expressAsyncHandler(async (req, res) => {
    // get product collection obj
    let productCollectionObj = req.app.get("productCollectionObj")
    // get all products
    let productArray = await productCollectionObj.find().toArray();
    res.send({ message: "All Products", payload: productArray })
}))

productApp.post('/createProduct', expressAsyncHandler(async (req, res) => {
    let productObj = req.body;
    let productCollectionObj = req.app.get("productCollectionObj")

    let result = await productCollectionObj.findOne({ productname: productObj.productname })
    if (result != null)
        res.send({ message: "Existing product" })
    else {
        await productCollectionObj.insertOne(productObj)
        res.send({ message: "Product created" })
    }

}))





module.exports = productApp