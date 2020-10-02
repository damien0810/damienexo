/* global db */
const Countries = [
  {
    name: "Iceland",
    capital: "Reykjavik",
    continent: "Europe",
  },

  { name: "Belgique", capital: "Bruxelles", continent: "Europe" },

  {
    name: "Portugal",
    capital: "lisbonne",
    continent: "Europe",
  },
];
// write your MongoDB shell command here
db.worldAtlas.insertMany(Countries);
