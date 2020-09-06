var express = require('express');
var router = express.Router();
const dataSongs = require('../db/songsModel');

router.get('/', async function (req, res, next) {
    let songs = await dataSongs.getSongs();

    res.json(songs);
});

//---------INSERTAR UNO---------------
router.post('/', async (req, res) => {
    /* FORMATO A ENVIAR EN BODY
    {
    "song": "Gasolina",
    "author": "Daddy Yankee"
    }
    */    

   const cancion = {
      song: req.body.song,
      author: req.body.author,
      date: new Date()
    };

    console.log(req.body);
  
    const result = await dataSongs.pushSong(cancion)
    .catch((error)=>{console.log(error)});
  
    res.send(cancion);
  });

module.exports = router;