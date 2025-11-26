const express = require('express');
const app=express();
const dotenv=require('dotenv').config();
const connectDB=require('./config/connectionDb');

const PORT=process.env.PORT || 3000;
connectDB();
app.use(express.json()); //to extract json data from request body

// app.get("/",(req,res)=>{
//   res.json({message:"Hello World!"});
// });
app.use("/recipe",require("./routes/recipe"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});