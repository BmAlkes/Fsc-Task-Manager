const TaskModel = require("../models/task.model");
const { notFoundError } = require("../error/mongodb.error");

class TaskController {
    constructor(req, res) {
        this.req = req;
        this.res = res;
    }
    async getTasks() {
        try {
            const tasks = await TaskModel.find({});
            this.res.status(200).send(tasks);
        } catch (error) {
            this.res.status(500).send(error.message);
        }
    }

    async getTasksById() {
        try {
            const taskId = this.req.params.id;
            const task = await TaskModel.findById(taskId);

            if (!task) {
                return notFoundError(this.res);
            }
            this.res.status(200).send(task);
        } catch (error) {
            this.res.status(500).send(error.message);
        }
    }

    async postTask() {
        try {
            const newTask = new TaskModel(this.req.body);

            await newTask.save();
            this.res.status(201).send(newTask);
        } catch (error) {
            this.res.status(500).send(error.message);
        }
    }

    async updateTaskById() {
        try {
            const taskId = this.req.params.id;
            const taskData = this.req.body;

            const taskToUpdate = await TaskModel.findById(taskId);

            const allowedUpdate = ["isCompleted"];

            const requestedUpdate = Object.keys(taskData);

            for (const update of requestedUpdate) {
                if (allowedUpdate.includes(update)) {
                    taskToUpdate[update] = taskData[update];
                } else {
                    return this.res
                        .status(500)
                        .send("um ou mais campos nao sao editaveis");
                }
            }
            await taskToUpdate.save();

            return this.res.status(200).send(taskToUpdate);
        } catch (error) {
            return this.res.status(500).send(error.message);
        }
    }

    async delete() {
        try {
            const taskId = this.req.params.id;

            const taskToDelete = await TaskModel.findById(taskId);
            if (!taskToDelete) {
                return notFoundError(this.res);
            }
            const deletedTask = await TaskModel.findByIdAndDelete(taskId);
            this.res.status(200).send(deletedTask);
        } catch (error) {
            this.res.status(500).send(error.message);
        }
    }
}

module.exports = TaskController;
