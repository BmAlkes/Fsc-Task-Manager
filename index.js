const express = require("express");
const dotenv = require("dotenv");

const connectToDataBase = require("./src/database/mongoose.database");

dotenv.config();
const app = express();
connectToDataBase();
app.get("/", (req, res) => {
    res.status(200).send("hello world");
});

app.listen(8000, () => {
    console.log("listening on port 8000");
});
