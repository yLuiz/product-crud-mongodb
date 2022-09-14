const { MongoClient } = require('mongodb');

const uri = require("../environment/environment")

const client = new MongoClient(uri.MONGO_URL);

async function run() {
  try {
    await client.connect();
    console.log("Conectado ao MongoDB!")
  } catch (error) {
    console.log(error);
  }
}

run();

module.exports = client