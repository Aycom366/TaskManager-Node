const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  updateTask,
  getSingleTasks,
  deleteTask,
  createTask,
} = require("../controllers/tasks");

//getAllTasks is used to avoid populating this file
router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getSingleTasks).patch(updateTask).delete(deleteTask);

module.exports = router;
