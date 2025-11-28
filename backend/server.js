const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const connectDB = require('./config/connectionDb');
const cors = require("cors");

const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json()); // to extract json data from request body
app.use(cors());         // correct CORS middleware

// app.get("/", (req, res) => {
//   res.json({ message: "Hello World!" });
// });

app.use("/recipe", require("./routes/recipe"));
app.use("/",require("./routes/user"))

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
