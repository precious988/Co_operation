require('dotenv').config()
const express = require('express');
const PORT = process.env.PORT || 2020


const app = express();


app.listen(() => {
  console.log(`Server is listening to PORT: ${PORT}`);
  
})