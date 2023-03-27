"use strict";

// IMPORTS
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const noteRouter = require("./routes/notes-route");
const userRouter = require("./routes/users-route");

//CONSTANTS
const port = 4040;

//NEW INSTANCES
const server = express();
server.use(cors());

//ROUTES
server.use("/notes", noteRouter);
server.use("/users", userRouter);

//MONGOOSE CONNECTION
const connection = mongoose.connection;
mongoose.connect(
  "mongodb+srv://matandessaur:dblslsh@dblslsh.jmmsudd.mongodb.net/DoubleSlashDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
connection.once("open", () => {
  console.log("Connected to DoubleSlashDB");
});

//PORT LISTENER
server.listen(port, () => {
  console.log("running DoubleSlash server on port : 4040");
});
