const express = require('express')
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://goweek:goweek123@cluster0-hferg.mongodb.net/test?retryWrites=true&w=majority',{
  useNewUrlParser: true
})

const app = express();

app.use(require('./routes'))

app.listen(3000,()=>{
  console.log('server started')
})

