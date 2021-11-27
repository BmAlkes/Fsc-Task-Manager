const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const TaskRouter = require("./src/routes/task.routes");

const connectToDataBase = require("./src/database/mongoose.database");
const TaskModel = require("./src/models/task.model");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

connectToDataBase();

app.use("/tasks", TaskRouter);

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
