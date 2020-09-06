const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

//------rastreando todos los routes
const songsRouter = require('./routes/songs');

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());


app.get('/', (req, res, next) => {
    res.json({
        msg: "bienvenido ✔"
    });
});

//---vistas para las routes
app.use('/songs', songsRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Escuchando puerto ${port}`);
});