const bizProModel = require("../models/bizProModel")

const bizProController = {
    getAll: async (req, res) => {
        const { name } = req.query
        const allModels = await bizProModel.find();
        if (name === undefined) {
            res.status(200).send({
                data: allModels,
                message: "data get success!"
            })
        }
        else {
            res.status(200).send({
                data: allModels.filter((x) => x.name.toLowerCase().trim().includes(name.toLowerCase().trim())),
                message: "data get success!"
            })
        }
    },
    getbyID: async (req, res) => {
        const id = req.params.id
        bizProModel.findById(id).then((model) => {
            res.status(200).send({
                data: model,
                message: 'data get  success'
            })

        }).catch((err) => {
            res.send('data not found')
        })


    },
    post: async (req, res) => {
        const { imageURL, name, desc, more } = req.body
        const newModel = new bizProModel({
            imageURL: imageURL,
            name: name,
            desc: desc,
            more: more
        })
        await newModel.save()
        res.status(201).send("model created succesfully")
    },
    delete: async (req, res) => {
        const id = req.params.id;
        const deletedModel = await bizProModel.findByIdAndDelete(id)
        if (deletedModel == undefined) {
            res.status(204).send("data not found")
        }
        else {
            res.status(200).send({
                data: deletedModel,
                message: 'data deleted succesfully'
            })
        }
    },
    edit: async(req,res)=>{
        const id = req.params.id;
        const {imageURL,name, desc,more} = req.body
        const existedModel = await bizProModel.findByIdAndUpdate(id,{imageURL:imageURL, name:name, desc:desc, more:more})
        if(existedModel==undefined){
          res.status(204).send('data not found')
        }
        else{
          res.status(200).send('data edited succesfuly')
        }
    }
}

module.exports = bizProController