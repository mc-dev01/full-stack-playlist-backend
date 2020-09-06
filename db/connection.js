const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv');

dotenv.config();
 
// Connection URL
const url = process.env.DB_CONNECTION;
 
const client = new MongoClient(url, {useNewUrlParser:true, useUnifiedTopology:true});

async function getConnection(){
    return await client.connect().catch(err => console.log(err));
}

module.exports = {getConnection}