"use strict";

const express = require("express");
const userRouter = express.Router();
const userModel = require("../model/user.model");
userRouter.use(express.json());

userRouter.post("/newUser", (req, res) => {
  const newUser = new userModel(req.body);
  newUser
    .save()
    .then(() => {
      res.send("User saved successfuly");
    })
    .catch((err) => {
      res.status(500).send("Error saving user" + err);
    });
});

userRouter.get("/users", (req, res) => {
  userModel
    .find()
    .then((send) => res.status(200).json(send))
    .catch((err) => {
      res.status(500).send("Nothing found");
    });
});

userRouter.put("/editUser/:id", (req, res) => {
  const id = req.params.id;
  userModel
    .findById(id)
    .then((editedUser) => {
      editedUser.avatar = req.body.avatar;
      editedUser.firstName = req.body.firstName;
      editedUser.lastName = req.body.lastName;
      editedUser.email = req.body.email;
      editedUser.password = req.body.password;

      editedUser
        .save()
        .then(res.status(200))
        .catch((err) => console.error(err));
    })
    .catch((err) => console.error(err));
});

module.exports = userRouter;
