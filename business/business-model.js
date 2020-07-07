const db = require("../data/db-config");

// Projects

function find() {
  return db("projects").select("*");
}

function add(project) {
  return db("projects").insert(project);
}

function update(id, additions) {
  db("projects").where({ id }).update(additions);
}

function remove(id) {
  db("projects").where({ id }).del();
}

// Resources

function findResources() {
  return db("resources").select("*");
}

function addResource(resource) {
  return db("resources").insert(resource);
}

// Tasks

function findTasks(projectId) {
  console.log();
  return db("Tasks as t")
    .join("Projects as p", "p.id", "t.project_id")
    .where("t.project_id", projectId)
    .select("p.project_name", "p.description as project_description", "t.*")
    .orderBy("p.project_name");
}

function addTask(task) {
  console.log();
  return db("tasks").insert(task);
}

module.exports = {
  find,
  findResources,
  findTasks,
  add,
  addResource,
  addTask,
  update,
  remove,
};
