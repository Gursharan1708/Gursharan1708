const express = require('express')
const path = require('path')

const app = express()
const publicPath = path.join(__dirname,'../public')

app.set('view engine','hbs')
app.use(express.static(publicPath))



app.get('',( req, res )=>{
    res.render('calculation')
})


app.listen(3000,()=>{
    console.log('live at port number 3000')
})