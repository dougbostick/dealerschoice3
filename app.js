console.log("app.js");
const express = require("express");
const db = require("./db");
const seedDb = require("./seed");

seedDb();

//add a row to categories,
