exports.up = function (knex) {
  return knex.schema
    .createTable("Projects", (tbl) => {
      tbl.increments();
      tbl.text("Project_Name", 128).unique().notNullable();
      tbl.text("Description");
      tbl.boolean("Completed").default(false);
    })
    .createTable("Resources", (tbl) => {
      tbl.increments();
      tbl.text("Resource_Name").unique().notNullable();
      tbl.text("Description");
    })
    .createTable("Tasks", (tbl) => {
      tbl.increments();
      tbl
        .integer("Project_Id")
        .notNullable()
        .unsigned()
        .references("Id")
        .inTable("Projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.text("Description").unique().notNullable();
      tbl.text("Notes");
      tbl.boolean("Completed").default(false);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("tasks")
    .dropTableIfExists("Resources")
    .dropTableIfExists("Projects");
};
