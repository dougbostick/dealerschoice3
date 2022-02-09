//console.log("hello");
const pg = require("pg");
const client = new pg.Client("postgres://localhost/oscars_2021");

client.connect();
console.log("connected to DB");
