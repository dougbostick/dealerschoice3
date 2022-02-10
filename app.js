console.log("app.js");
const express = require("express");
const db = require("./db");
const seedDb = require("./seed");
const postList = require("./postList");
const postDetails = require("./postDetails");

const app = express();
app.use(express.static("public"));
seedDb();

app.get("/", async (req, res, next) => {
  try {
    const data = await db.query("SELECT * FROM categories");
    console.log("categories data", data);
    res.send(postList(data.rows));
  } catch (ex) {
    next(ex);
  }
});

app.get("/:id", async (req, res, next) => {
  try {
    const title = await db.query(
      "SELECT * FROM categories WHERE categories.id = $1",
      [req.params.id]
    );
    console.log("title", title);
    const data = await db.query(
      "SELECT * FROM nominees WHERE categories_id = $1",
      [req.params.id]
    );
    const post = data.rows;
    console.log("nominees data", data);
    const titlePost = title.rows;
    res.send(postDetails(titlePost, post));
  } catch (ex) {
    next(ex);
  }
});

const PORT = 3030;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
