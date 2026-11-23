
const express = require('express');

const app = express();

const PORTA = 3000;

// Permite receber JSON
app.use(express.json());

// Middleware
const registrarAcesso = require('./middlewares/registrarAcesso');

app.use(registrarAcesso);

// Importar as rotas
const alunoRoutes = require('./routes/alunoRoutes');

// Usar as rotas
app.use('/alunos', alunoRoutes);

// Rota inicial
app.get('/', (req, res) => {
    res.send('API de alunos funcionando!');
});

// Iniciar servidor
app.listen(PORTA, () => {
    console.log(`Servidor rodando na porta ${PORTA}`);
});
