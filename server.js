const express = require('express')
const path = require('path')

const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.use('/public', express.static(path.join(__dirname, 'public')));



app.get('/', (req, res) => {
    res.render('pages/index')
})

app.get('/forgotPassword', (req, res) => {
    res.render('pages/forgotPassword')
})


app.listen(port)
 
console.log('server on')