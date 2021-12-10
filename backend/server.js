require('dotenv').config();
const express = require('express')
const app = express();
const router = require('./routes')

const PORT = process.env.PORT || 5500;
app.use(express.json())
app.use(router)

app.get('/',(req,res)=> {
    res.send('Welcome to home ap')
})

app.listen(PORT,() => {
    console.log(`Server is running on PORT ${PORT}`);
})