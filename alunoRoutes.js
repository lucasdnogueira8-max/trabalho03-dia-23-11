
const express = require('express');
const router = express.Router();

const alunoController = require('../controllers/alunoController');

// Rota para listar alunos
router.get('/', alunoController.listarAlunos);

// Rota para cadastrar aluno
router.post('/', alunoController.cadastrarAluno);

// Rota para atualizar aluno
router.put('/:id', alunoController.atualizarAluno);

// Rota para excluir aluno
router.delete('/:id', alunoController.excluirAluno);

module.exports = router;
