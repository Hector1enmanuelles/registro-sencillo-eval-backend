const express = require('express');
const registerSchema = require('../models/register');

const router = express.Router()

// CREATE a register
router.post("/register",(req, res) =>{
    const register = registerSchema(req.body);
    register
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));

});

// GET All registers
router.get("/registers",(req, res) =>{
    registerSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));

});

// SINGLE a registers
router.get("/registers/:id",(req, res) =>{
    const {id} = req.params;
    registerSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));

});

// UPDATE a register
router.put("/registers/:id",(req, res) =>{
    const {id} = req.params;
    const {nombre, apellido, telefono} = req.body;
    registerSchema
    .updateOne({_id: id}, { $set:{nombre, apellido, telefono }})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));

});


// DELETE a register
router.delete("/registers/:id",(req, res) =>{
    const {id} = req.params;
    const {nombre, apellido, telefono} = req.body;
    registerSchema
    .deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));

});


module.exports = router;