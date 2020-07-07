const express = require("express");

const Business = require("./business-model");

const router = express.Router();

// Project CRUD

router.get("/", (req, res) => {
  Business.find()
    .then((projects) => {
      res.json(projects);
    })
    .catch((err) => {
      res.status(500).json({ Message: "Could not find projects!" });
    });
});

router.post("/", (req, res) => {
  const newProject = req.body;

  Business.add(newProject)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new project" });
    });
});

// Resource CR of CRUD

router.get("/resources", (req, res) => {
  Business.findResources()
    .then((resources) => {
      res.json(resources);
    })
    .catch((err) => {
      res.status(500).json({ Message: "Could not find resources!" });
    });
});

router.post("/resources", (req, res) => {
  const newResource = req.body;

  Business.addResource(newResource)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Failed to add new resource" });
    });
});

// Task CR of CRUD

router.get("/tasks/:projectId", (req, res) => {
  Business.findTasks(req.params.projectId)
    .then((tasks) => {
      res.json(tasks);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ Message: "Could not find tasks!" });
    });
});

router.post("/tasks", (req, res) => {
  const newTask = req.body;

  Business.addTask(newTask)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Failed to create new task" });
    });
});

module.exports = router;
