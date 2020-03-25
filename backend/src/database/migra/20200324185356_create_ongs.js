//método UP é responsavel pela criação da tabela
exports.up = function(knex) {
    return knex.schema.createTable('ong', function (table){
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf',2).notNullable();
    });
};

//Caso de algum problema, serve pra deletar a tabela
exports.down = function(knex) {
    return knex.schema.dropTable('ong');
};
