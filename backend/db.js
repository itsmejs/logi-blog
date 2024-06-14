/*
title {
    title:string,
    discription:string,
    completed : boolene
}


mongodb+srv://itachime99:<password>@todo-db.dh8zewv.mongodb.net/?retryWrites=true&w=majority&appName=todo-db
*/

const mongoose = require("mongoose");
const { boolean } = require("zod");

mongoose.connect(
  "mongodb+srv://itachime99:dclvtNdfRfiJchp7@todo-db.dh8zewv.mongodb.net/?"
);

const todoSchema = mongoose.Schema({
  title: String,
  discription: String,
  Completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
