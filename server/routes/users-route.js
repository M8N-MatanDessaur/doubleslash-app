"use strict";

const express = require("express");
const userRouter = express.Router();
const userModel = require("../model/user.model");
userRouter.use(express.json());

// CREATE NEW USER
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

// GET ALL USERS
userRouter.get("/users", (req, res) => {
  userModel
    .find()
    .then((send) => res.status(200).json(send))
    .catch((err) => {
      res.status(500).send("Nothing found");
    });
});

// EDIT USER
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
        .then(() => res.json("User edition successful !")) // on confirme le travail
        .catch((err) => res.status(400).json("Error during saving : " + err));
    })
    .catch((err) => console.error(err));
});

// DELETE USER
userRouter.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;
  userModel
    .findByIdAndDelete(id)
    .then((utilisateur) => {
      res.status(202).json({
        msg: `User with ${utilisateur._id} deleted`,
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// GET ONE USER
userRouter.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  userModel
    .findById(id)
    .exec()
    .then((send) => res.status(200).json(send))
    .catch((err) => res.status(400).json("Error with id : " + err));
});

module.exports = userRouter;
