"use strict";

const express = require("express");
const userRouter = express.Router();
const userModel = require("../model/user.model");
userRouter.use(express.json());

// CREATE NEW USER
userRouter.post("/newUser", (req, res) => {
  const email = req.body.email;
  userModel
    .findOne({ email: email })
    .then((email) => {
      if (email) {
        return res
          .status(400)
          .send("User already exists with that email address");
      } else {
        const newUser = new userModel(req.body);
        return newUser.save().send("User saved successfully");
      }
    })
    .catch((err) => {
      return res.status(500).send("Error saving user: " + err);
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

// GET ONE USER BY ID
userRouter.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  userModel
    .findById(id)
    .exec()
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(user);
    })
    .catch((err) => res.status(400).json({ message: "User not found " }));
});

// GET ONE USER BY EMAIL
userRouter.get("/getUserByEmail/:email", (req, res) => {
  const email = req.params.email;
  userModel
    .findOne({ email: email })
    .exec()
    .then((user) => {
      if (!user) {
        return res
          .status(200)
          .json({
            message: "Email is available. Proceed with creating a new account.",
          });
      }
      res
        .status(400)
        .json({
          message: "Email is already in use. Please use a different email.",
        });
    })
    .catch((err) =>
      res.status(500).json({ message: "Error finding user: " + err })
    );
});

module.exports = userRouter;
