"use strict";

// IMPORTS
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//CONSTANTS
const port = 4040;

//NEW INSTANCES
const server = express();


//PORT LISTENER
server.listen(port, ()=>{console.log("running DoubleSlash server on port : 4040")});