"use strict";

const mongoose = require('mongoose');

const noteModel = new mongoose.Schema({
    author: String ,
    title: String ,
    body: String ,
    extention: String ,
    dateCreated: Date ,
    dateModified: Date ,
});

module.exports = mongoose.model('notes', noteModel);