const express = require("express");

const TaskController = require("../controllers/task.controller");
const TaskModel = require("../models/task.model");

const router = express.Router();

router.get("/", async (req, res) => {
    return new TaskController(req, res).getTasks();
});

router.get("/:id", async (req, res) => {
    return new TaskController(req, res).getTasksById();
});

router.post("/", async (req, res) => {
    return new TaskController(req, res).postTask();
});

router.patch("/:id", async (req, res) => {
    return new TaskController(req, res).updateTaskById();
});

router.delete("/:id", async (req, res) => {
    return new TaskController(req, res).delete();
});

module.exports = router;
