import { Knex } from 'knex';

const tableName = 'user';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(tableName, (table) => {
    table.increments('id');
    table.string('full_name');
    table.string('email');
    table.string('password');
    table.dateTime('email_verified_at');
    table.dateTime('created_at');
    table.dateTime('updated_at');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(tableName);
}
