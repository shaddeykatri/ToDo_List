const express = require('express')
const mongoose = require('mongoose')
const env = require('dotenv').config()


const app = express()

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser:true,
    useUnifiedTopology : true
})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const alienRouter = require('./routes/aliens')
app.use('/aliens',alienRouter)


app.listen(process.env.PORT || 9000, () => {
    console.log('Server started')
})