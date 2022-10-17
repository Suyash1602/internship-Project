const exp = require('express')
const userApp = exp.Router();
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const verifyToken = require('../middlewares/verifyToken')
require('dotenv').config();


//import express async handler
const expressAsyncHandler = require('express-async-handler')


// creating user api
// route for get request
userApp.get("/getusers", expressAsyncHandler(async (req, res) => {
    //get usercollectionObj
    let userCollectionObj = req.app.get("userCollectionObj")
    //get all users
    let userArray = await userCollectionObj.find().toArray();
    res.send({ message: "All users", payload: userArray })

}));

userApp.get('/getUser/:username', expressAsyncHandler(async (req, res) => {
    let userCollectionObj = req.app.get("userCollectionObj")
    let userName = req.params.username;
    let userObj = await userCollectionObj.findOne({ username: { $eq: userName } })
    res.send({ message: "User", payload: userObj })

}))

// route for user login 
userApp.post('/login', expressAsyncHandler(async (req, res) => {
    let userCollectionObj = req.app.get("userCollectionObj")
    let userCredentialObj = req.body;
    let user = await userCollectionObj.findOne({ username: userCredentialObj.username })
    if (user === null)
        res.send({ message: "Invalid user." })
    else {
        let result = await bcryptjs.compare(userCredentialObj.password, user.password)
        if (!result)
            res.send({ message: "Invalid Password." })
        else {
            let token = jwt.sign({ username: user.username }, process.env.SECRETE_KEY)
            res.send({ message: "success", token: token, user: user })
        }
    }

}))

// private route
userApp.get('/private', verifyToken, expressAsyncHandler((req, res) => {
    // console.log(req.headers)
    res.send({ message: "Response from private." })
}))

// route for create user 
userApp.post('/createUser', expressAsyncHandler(async (req, res) => {
    let userObj = req.body;
    let userCollectionObj = req.app.get("userCollectionObj")
    // insert into db

    // verify duplicat user
    let result = await userCollectionObj.findOne({ username: userObj.username })
    if (result != null)
        res.send({ message: "User already exist choose another username." })
    else {
        let hashedPass = await bcryptjs.hash(userObj.password, 6);
        userObj.password = hashedPass;
        await userCollectionObj.insertOne(userObj)
        res.send({ message: "User created" })
    }

}))


module.exports = userApp