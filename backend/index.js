const express = require("express");
const { createTodo, updateTodo } = require("./types");

const app = express();

app.use(express.json());

app.post("/todos", (req, res, next) => {
    const createpay_load = req.body;
    const parsedpayload = createTodo.safeParse{createpay_load};
    if(!parsedpayload.success){
        res.status(411).json({msg:"you sent wrong input"})
       return; 
    }


});

app.get("/todos", (req, res, next) => {});

app.put("/done", (req, res, next) => {
    const updatepay_load = req.body;
    const parsedpayload = updateTodo.safeParse{updatepay_load};
    if(!parsedpayload.success){
        res.status(411).json({msg:"you sent wrong input"})
       return; 
    }

});

app.listen(3000, (err) => {
  console.log("this did not work");
});
