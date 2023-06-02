const express = require('express')
const bizPro_router = express.Router()
const bizProController = require("../controllers/bizProController")
//get All
bizPro_router.get('/', bizProController.getAll)

//get By id
bizPro_router.get('/:id', bizProController.getbyID)

//delete
bizPro_router.delete("/:id", bizProController.delete)
//post
bizPro_router.post("/", bizProController.post)

//edit
bizPro_router.put("/:id", bizProController.edit)

module.exports = bizPro_router