const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bizPro_router = require('./routes/bizPro.routes') 

dotenv.config()

app.use(bodyParser.json())
app.use(cors())

//schema create



//post

// app.get('/api/bizPro', async(req,res)=>{
  
//   const allModels = await bizProModel.find()
//   res.status(200).send({
//     data:allModels,
//     message:"data get succesfuully"
//   })
// })


DB_CONNECTION = process.env.DB_CONNECTION
DB_PASSWORD = process.env.DB_PASSWORD
mongoose.connect(DB_CONNECTION.replace("<password>", DB_PASSWORD)).then(()=>{
    console.log("MongoDB connected")
})

//bizPro
app.use('/api/bizPro', bizPro_router)
app.get('/api', (req, res) => {
  res.send('Hello BizPro!')
})

PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})