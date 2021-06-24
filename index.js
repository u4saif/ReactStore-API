const express = require("express");
const bodyParser= require('body-parser');
const app = express();
var cors = require('cors')

const products= require('./routes/allproducts'); 
const cart = require('./routes/cart');
const PORT = process.env.PORT || 5000;
app.use(cors())
app.use(bodyParser.json())
app.get("/api",(req,res)=>{
    res.json({
        "data": {
            "message": "App is running"
        }
    })
});
app.use('/api/products',products);
app.use('/api/cart',cart);

app.listen(PORT,()=>{
    console.log("server started at port 5000", PORT);
})