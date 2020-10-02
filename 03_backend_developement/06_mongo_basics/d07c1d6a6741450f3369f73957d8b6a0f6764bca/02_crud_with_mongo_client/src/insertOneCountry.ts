import * as mongo from "mongodb";

type Country = {
  name: "France";
  capital: "Paris";
  continent: "Europe";
};

export function insertOneCountry(db: mongo.Db): Promise<Country> {
  const Country = {
    name: "Allemangne",
    capital: "Berlin",
    continent: "Europe",
  };
  return db
    .collection("worldAtlas")
    .insertOne(Country)
    .then((result) => {
      return result.ops[0];
    });
}
