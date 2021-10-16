const path = require("path");
const dotenv = require("dotenv");
let rootPath = path.normalize(path.join(__dirname, "/../"));

dotenv.config();

module.exports = {
  development: {
    rootPath: rootPath,
    db: process.env.MONGO_URL,
    port: 5000,
  },
  staging: {},
  production: {
    port: process.env.PORT,
    db: process.env.MONGO_URL,
  },
};
