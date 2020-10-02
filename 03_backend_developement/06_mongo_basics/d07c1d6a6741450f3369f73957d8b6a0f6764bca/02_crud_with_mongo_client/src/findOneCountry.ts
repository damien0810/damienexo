import * as mongo from "mongodb";

export function findOneCountry(db: mongo.Db) {
  // code your function here

  return db.collection("worldAtlas").findOne({ name: "Iceland" });
}
