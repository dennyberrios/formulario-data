import express from 'express';
import cors from 'cors';
import users from './routes/users.js'

const app = express();
const port = 8081;

app.use(express());
app.use(express.json());
app.use(cors());

app.use("/users", users)

app.use((req, res, next) => {
    res.status(500).send({
        error: "Rota não encontrada"
    })
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta: http://localhost:${port}`);
});