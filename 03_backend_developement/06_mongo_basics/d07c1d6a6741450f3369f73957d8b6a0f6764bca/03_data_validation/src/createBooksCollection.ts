import * as mongo from "mongodb";

export const booksValidator = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      additionalProperties: false,
      required: ["_id", "title", "author", "description"],
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
        author: {
          bsonType: "string",
          enum: ["Math", "English", "Computer Science", "History", null],
          description: "can only be one of the enum values and is required",
        },
        description: {
          bsonType: "string",
          description: "must be a double if the field exists",
          maxLength: 100,
        },
      },
    },
  },
};

export function createBooksCollection(db: mongo.Db): Promise<mongo.Collection> {
  return db.createCollection("books", booksValidator);
}
