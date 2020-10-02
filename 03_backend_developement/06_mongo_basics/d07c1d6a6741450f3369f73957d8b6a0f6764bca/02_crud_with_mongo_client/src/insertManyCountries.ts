import * as mongo from "mongodb";
import { countries } from "../utils/countries";

type Country = {
  name: "France";
  capital: "Paris";
  continent: "Europe";
};

export function insertManyCountries(db: mongo.Db): Promise<Country[]> {
  const countries = [
    {
      name: "Allemangne",
      capital: "Berlin",
      continent: "Europe",
    },
    {
      name: "Allemangne",
      capital: "Berlin",
      continent: "Europe",
    },
    {
      name: "Allemangne",
      capital: "Berlin",
      continent: "Europe",
    },
  ];
  return db
    .collection("worldAtlas")
    .insertMany(countries)
    .then((Result) => {
      return Result.ops;
    });
}
