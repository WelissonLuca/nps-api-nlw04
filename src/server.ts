import "reflect-metadata";
import express from 'express';
import "./database";


const app = express();


app.get('/', (req, res) => {
    return res.json({message: "Hello World - NLW04"})
})

app.post('/', (req, res) => {
    return res.json({message: 'Os dados foram salvos com sucesso'})
})
app.listen(3333, () => console.log('server is running'))
