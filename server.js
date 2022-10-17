// creating express application
const exp = require("express");
const app = exp();
require('dotenv').config();

const path = require('path')
// connecting built with server
app.use(exp.static(path.join(__dirname, './build')))

// import mongoclien
const mclient = require('mongodb').MongoClient;

// connect to database
let dbUrl = process.env.DATABASE_URL
mclient.connect(dbUrl)
    .then(client => {
        // get database obj
        let dbObj = client.db("internshipProjectDatabase")
        // get collection obj
        let userCollectionObj = dbObj.collection("userCollection")
        // share user api
        app.set("userCollectionObj", userCollectionObj)

        let productCollectionObj = dbObj.collection("productCollection")
        // share product api
        app.set("productCollectionObj", productCollectionObj)
        console.log("Database connected successfully");
    })
    .catch(err => console.log("error in db connection ", err))


// body parser
app.use(exp.json())

// import apis
const userApp = require('./APIs/userApi')
const productApp = require('./APIs/productApi')

// forwarding request to specific apis
app.use("/user", userApp)
app.use("/product", productApp)

// invalid path
app.use("**", (req, res, next) => {
    res.send({ message: "Invalid path request." })
})


// error handler
app.use((err, req, res, next) => {
    res.send({ message: err.message })
})



// assigning port number
const port = process.env.portNumber;
app.listen(port, () => console.log(`Server connected and listening on ${port}`));