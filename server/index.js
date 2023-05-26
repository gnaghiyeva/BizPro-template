const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')
app.use(bodyParser.json())
app.use(cors())

//schema create
const bizProSchema = new mongoose.Schema({
    imageURL:String,
    name:String,
    desc:String,
    more:String
})

const bizProModel = mongoose.model('bizProModel', bizProSchema)

//post
app.post('/api/bizPro', async (req,res)=>{
  const{imageURL,name,desc,more} = req.body
  const newModel = new bizProModel({
    imageURL:imageURL,
    name:name,
    desc:desc,
    more:more
  })
  await newModel.save()
  res.status(201).send("model created succesfully")
})

// app.get('/api/bizPro', async(req,res)=>{
  
//   const allModels = await bizProModel.find()
//   res.status(200).send({
//     data:allModels,
//     message:"data get succesfuully"
//   })
// })
app.get("/api/bizPro", async(req,res)=>{
  const {name}=req.query
  const allModels = await bizProModel.find();
  if(name===undefined){
    res.status(200).send({
      data:allModels,
      message:"data get success!"
    })
  }
  else{
    res.status(200).send({
      data: allModels.filter((x)=>x.name.toLowerCase().trim().includes(name.toLowerCase().trim())),
      message:"data get success!"
    })
  }
})
app.get('/api/bizPro/:id',(req,res)=>{
  const id = req.params.id
  bizProModel.findById(id).then((model)=>{
    res.status(200).send({
      data:model,
      message:'data get  success'
    })

  }).catch((err)=>{
    res.send('data not found')
  })
 

})

app.delete("/api/bizPro/:id", async(req,res)=>{
  const id = req.params.id;
  const deletedModel = await bizProModel.findByIdAndDelete(id)
  if(deletedModel==undefined){
    res.status(204).send("data not found")
  }
  else{
    res.status(200).send({
      data:deletedModel,
      message:'data deleted succesfully'
    })
  }
})

app.put("/api/bizPro/:id", async(req,res)=>{
  const id = req.params.id;
  const {imageURL,name, desc,more} = req.body
  const existedModel = await bizProModel.findByIdAndUpdate(id,{imageURL:imageURL, name:name, desc:desc, more:more})
  if(existedModel==undefined){
    res.status(204).send('data not found')
  }
  else{
    res.status(200).send('data edited succesfuly')
  }
})

DB_CONNECTION = process.env.DB_CONNECTION
DB_PASSWORD = process.env.DB_PASSWORD
mongoose.connect(DB_CONNECTION.replace("<password>", DB_PASSWORD)).then(()=>{
    console.log("MongoDB connected")
})
app.get('/api', (req, res) => {
  res.send('Hello BizPro!')
})

PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})