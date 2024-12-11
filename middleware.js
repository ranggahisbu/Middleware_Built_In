const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(morgan('dev'))

app.get('/mahasiswa',(req,res)=>{
    console.log({message: "Contoh data"});
    res.json({message:"Contoh Data"})
})

app.listen(4000,()=>{
    console.log('Server running');
})