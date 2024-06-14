const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();

app.use(express.json());

app.post("/todos", async function (req, res, next) {
  const createPayLoad = req.body;
  const parsedpayload = createTodo.safeParse(createPayLoad);

  if (!parsedpayload.success) {
    res.status(411).json({ msg: "you sent wrong input" });
    return;
  }

  // put in mongoose
  await todo.create({
    title: createPayLoad.title,
    discription: createPayLoad.discription,
    conpleted: flase,
  });

  res.json({
    msg: "todo created",
  });
});

app.get("/todos", async function (req, res, next) {
  const todos = await todo.find({});

  res.json({
    todos,
  });
});

app.put("/done", async function (req, res, next) {
  const updatepay_load = req.body;
  const parsedpayload = updateTodo.safeParse(updatepay_load);
  if (!parsedpayload.success) {
    res.status(411).json({ msg: "you sent wrong input" });
    return;
  }

  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );

  res.json({
    msg: "todo marked as completed",
  });
});

app.listen(3000);
