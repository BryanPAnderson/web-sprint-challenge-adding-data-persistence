
exports.up = async function(knex) {
  await knex.schema.createTable("projects", tbl => {
    tbl.increments("project_id")
    tbl.text("project_name").notNull()
    tbl.string("project_description")
    tbl.boolean("project_completed").defaultTo(false).notNull()
  })
  await knex.schema.createTable("resources", tbl => {
      tbl.increments("resource_id")
      tbl.text("resource_name").notNull()
      tbl.string("resource_description")
  })
  await knex.schema.createTable("tasks", tbl => {
      tbl.increments("task_id")
      tbl.string("task_description").notNull()
      tbl.string("task_notes")
      tbl.boolean("task_completed").defaultTo(false).notNull()
      tbl.interger("project_id").notNull().references("project_id").inTable("projects").onDelete("SET NULL")
  })
  await knex.schema.createTable("project_resources", tbl => {
      tbl.integer("project_id").notNull().references("project_id").inTable("projects").onDelete("CASCADE")
      tbl.integer("resource_id").notNull().references("resource_id").inTable("resources").onDelete("SET NULL")
      tbl.primary(["project_id", "resource_id"])
  })
};

exports.down = function(knex) {
  await knex.schema.dropTableIfExists("project_resource")
  await knex.schema.dropTableIfExists("tasks")
  await knex.schema.dropTableIfExists("resources")
  await knex.schema.dropTableIfExists("projects")
};
