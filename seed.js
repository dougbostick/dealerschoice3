//console.log("hello");
// const pg = require("pg");
// const client = new pg.Client("postgres://localhost/oscars_2021");

//client.connect();
// console.log("connected to DB");

const db = require("./db");
//console.log("app.js");
const setUp = async () => {
  try {
    await db.connect();

    const SQL = `
    DROP TABLE IF EXISTS categories;
    DROP TABLE IF EXISTS nominees;
    DROP TABLE IF EXISTS personnel;

    CREATE TABLE categories (
        id SERIAL primary key,
        Name varchar (30) not null
        );
        
        CREATE TABLE nominees (
        id SERIAL primary key,
        Categories_id integer not null,
        Name varchar (150)  not null,
        Movie varchar (150)  not null,
        Result varchar (50)
        );
        
        CREATE TABLE personnel (
        id SERIAL primary key,
        Nominees_id integer not null,
        Personnel varchar (50) not null,
        Role varchar (25) 
        ); 

        INSERT INTO categories (name)
        VALUES ('actor in a leading role');
        INSERT INTO categories (name)
        VALUES ('actress in a leading role');
        INSERT INTO categories (name)
        VALUES ('cinematography');
        INSERT INTO categories (name)
        VALUES ('animated feature film');
        INSERT INTO categories (name)
        VALUES ('music (original score)');

        INSERT INTO nominees (Categories_id, name, movie, result)
        VALUES (1, 'Anthony Hopkins', 'The Father', 'Winner');
        INSERT INTO nominees (Categories_id, name, movie)
        VALUES (1, 'Riz Ahmed', 'Sound of Metal');
        INSERT INTO nominees (Categories_id, name, movie)
        VALUES (1, 'Chadwick Boseman', 'Ma Raineys Black Bottom');
        INSERT INTO nominees (Categories_id, name, movie)
        VALUES (1, 'Gary Oldman', 'Mank');
        INSERT INTO nominees (Categories_id, name, movie)
        VALUES (1, 'Steve Yeun', 'Minari');   

        INSERT INTO nominees (Categories_id, name, movie, result)
        VALUES (2, 'Frances McDormand', 'Nomadland', 'Winner');
        INSERT INTO nominees (Categories_id, name, movie)
        VALUES (2, 'Viola Davis', 'Ma Raineys Black Bottom');
        INSERT INTO nominees (Categories_id, name, movie)
        VALUES (2, 'Andra Day', 'The Unites States vs. Billie Holiday');
        INSERT INTO nominees (Categories_id, name, movie)
        VALUES (2, 'Vanessa Kirby', 'Pieces of a Woman');
        INSERT INTO nominees (Categories_id, name, movie)
        VALUES (2, 'Carey Mulligan', 'Promising Young Woman');

        INSERT INTO nominees (Categories_id, name, movie, result)
        VALUES (3, 'Erik Messerschmidt', 'Mank', 'Winner');
        INSERT INTO nominees (Categories_id, name, movie)
        VALUES (3, 'Sean Bobbitt', 'Judas and the Black Messiah');
        INSERT INTO nominees (Categories_id, name, movie)
        VALUES (3, 'Dariusz Wolski', 'News of the World');
        INSERT INTO nominees (Categories_id, name, movie)
        VALUES (3, 'Joshau James Richards', 'Nomadland');
        INSERT INTO nominees (Categories_id, name, movie)
        VALUES (3, 'Phedon Papamichael', 'The Trial of the Chicago 7');

        INSERT INTO nominees (Categories_id, name, movie, result)
        VALUES (4, 'Pete Docter and Dana Murray', 'Soul', 'Winner');
        INSERT INTO nominees (Categories_id, name, movie)
        VALUES (4, 'Dan Scanlon and Kori Rae', 'Onward');
        INSERT INTO nominees (Categories_id, name, movie)
        VALUES (4, 'Glean Keane, Gennie Rim, and Peilin Chou', 'Over the Moon');
        INSERT INTO nominees (Categories_id, name, movie)
        VALUES (4, 'Richard Phelan, Will Becher and Paul Kewley', 'A Shaun the Sheep Movie: Farmageddon');
        INSERT INTO nominees (Categories_id, name, movie)
        VALUES (4, 'Tomm Moore, Ross Stewart and Paul Young', 'Wolfwaklers');

        INSERT INTO nominees (Categories_id, name, movie, result)
        VALUES (5, 'Trent Reznor, Atticus Ross and Jon Batiste', 'Soul', 'Winner');
        INSERT INTO nominees (Categories_id, name, movie)
        VALUES (5, 'Terence Blanchard', 'Da 5 Bloods');
        INSERT INTO nominees (Categories_id, name, movie)
        VALUES (5, 'Trent Reznor and Atticus Ross', 'Mank');
        INSERT INTO nominees (Categories_id, name, movie)
        VALUES (5, 'Emile Mosseri', 'Minari');
        INSERT INTO nominees (Categories_id, name, movie)
        VALUES (5, 'James Newton Howard', 'News of the World');
    `;
    await db.query(SQL);
    console.log("data is seeded");
  } catch (ex) {
    console.log(ex);
  }
};

module.exports = setUp;

//console.log("connected to DB");
