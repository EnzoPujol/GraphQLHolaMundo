import express from "express";
import compression from "compression";
import cors from "cors";

const app = express();

app.use(cors());

app.use(compression());

app.get('/', (req, res) => {
    res.send('Bienvenido');
});


const PORT = 5400;
app.listen(
    { port : PORT},
    () => console.log(`hola mundo api graphql http://localhost:${PORT}`)
);