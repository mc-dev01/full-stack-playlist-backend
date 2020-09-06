const conecction = require('./connection');
const { ObjectId } = require('mongodb');


async function getSongs(){
    const clienteMongo = await conecction.getConnection();

    const songs = await clienteMongo.db('music-db').collection('music-collection').find().toArray();

    return songs;
}

async function pushSong(song){
    const clientmongo = await conecction.getConnection();

    const result = await clientmongo.db('music-db')
    .collection('music-collection')
    .insertOne(song);

    return result;
}

module.exports = {getSongs, pushSong};