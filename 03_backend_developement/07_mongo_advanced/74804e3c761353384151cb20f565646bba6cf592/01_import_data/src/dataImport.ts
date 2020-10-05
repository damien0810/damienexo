import * as fs from "fs";
import * as path from "path";

function dataImport() {
  const fileName = "gba.json";
  const filePath = path.resolve(`data/${fileName}`);
  const stringifiedPlatform = fs.readFileSync(filePath, "utf-8");
  const platform = JSON.parse(stringifiedPlatform);
  console.log(platform);
}
