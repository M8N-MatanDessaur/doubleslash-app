"use strict";

const express = require('express');
const noteRouter = express.Router();
const noteModel = require('../model/note.model');
noteRouter.use(express.json());

noteRouter.post('/newNote', (req, res) => {
    const newNote = new noteModel(req.body);
    newNote.save().then(()=>{
        res.send('Note is saved successfuly')
    })
    .catch(err => {
        res.status(500).send("Error saving note")
    })
});

noteRouter.get('/notes', (req, res) => {
    noteModel.find().then( send => res.status(200).json(send))
    .catch(err => {
        res.status(500).send("Nothing found")
    })
});

noteRouter.put('/editNote/:id', (req,res)=>{
    const id = req.params.id;
    noteModel.findById(id)
    .then(
        editedNote => {
        editedNote.author = req.body.author;
        editedNote.title = req.body.title;
        editedNote.body = req.body.body;
        editedNote.extention = req.body.extention;
        editedNote.dateCreated = req.body.dateCreated;
        editedNote.dateModified = req.body.dateModified;

        editedNote.save()
        .then(res.status(200))
        .catch(err=>console.error(err))
    })
    .catch(err=>console.error(err))
})

module.exports = noteRouter;