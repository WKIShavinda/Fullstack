const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const p = require ("./models/P");
const Websocket = require('ws');
require("dotenv").config();


const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
   
    useNewUrlParser: true
   
});

const connection = mongoose.connection;
connection.once("open",() => {
 console.log("Mongodb Connection success!");
})

app.post("/api/users", async (req, res) => {
    
        const user  = new p({
          username: req.body.username,
          email: req.body.email,
          phone:req.body.phone,
          message:req.body.message,
        });
        const newUser = await user.save();
        res.status(201).json({ message: "succsessfull" });
      
  });

app.listen(PORT, () => {
    console.log('server is up and running on port number: ${PORT}')
})