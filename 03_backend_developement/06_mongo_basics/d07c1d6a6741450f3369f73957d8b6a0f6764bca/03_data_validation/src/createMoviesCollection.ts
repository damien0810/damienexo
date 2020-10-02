import * as mongo from "mongodb";

export const moviesValidator = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      additionalProperties: false,
      required: ["_id", "title", "genre", "year"],
      properties: {
        _id: {
          bsonType: "objectId",
          description: "must be a string and is required",
        },
        title: {
          bsonType: "string",
          minimum: 1,
          maximum: 100,
          description: "must be an integer in [ 1, 100 ] and is required",
        },
        genre: {
          bsonType: "string",
          description: "can only be one of the enum values and is required",
          enum: ["action", "comedy", "dramatic", "horror"],
        },
        year: {
          bsonType: "int",
          description: "must be a double if the field exists",
          minimum: 1950,
          maximum: 2020,
        },
        ratings: {
          bsonType: "object",
          additionalProperties: false,
          required: ["pressRating", "spectatorsRating"],
          properties: {
            pressRating: {
              bsonType: "int",
              minimum: 1,
              maximum: 5,
            },
            spectatorsRating: {
              bsonType: "int",
              minimum: 1,
              maximum: 5,
            },
          },
        },
      },
    },
  },
};

export function createMoviesCollection(db: mongo.Db): Promise<mongo.Collection> {
  return db.createCollection("movies", moviesValidator);
}
