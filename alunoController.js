
const alunoModel = require('../models/alunoModel');

// Listar alunos
const listarAlunos = (req, res) => {
    const alunos = alunoModel.listarAlunos();

    res.status(200).json(alunos);
};

// Cadastrar aluno
const cadastrarAluno = (req, res) => {
    const { nome, email, matricula } = req.body;

    if (!nome || !email || !matricula) {
        return res.status(400).json({
            erro: 'Preencha nome, email e matricula!'
        });
    }

    const aluno = alunoModel.cadastrarAluno(
        nome,
        email,
        matricula
    );

    res.status(201).json({
        mensagem: 'Aluno cadastrado com sucesso!',
        aluno: aluno
    });
};

// Atualizar aluno
const atualizarAluno = (req, res) => {
    const id = req.params.id;
    const { nome, email, matricula } = req.body;

    if (!nome || !email || !matricula) {
        return res.status(400).json({
            erro: 'Preencha todos os campos!'
        });
    }

    const aluno = alunoModel.atualizarAluno(
        id,
        nome,
        email,
        matricula
    );

    if (!aluno) {
        return res.status(404).json({
            erro: 'Aluno não encontrado!'
        });
    }

    res.status(200).json({
        mensagem: 'Aluno atualizado com sucesso!',
        aluno: aluno
    });
};

// Excluir aluno
const excluirAluno = (req, res) => {
    const id = req.params.id;

    const aluno = alunoModel.excluirAluno(id);

    if (!aluno) {
        return res.status(404).json({
            erro: 'Aluno não encontrado!'
        });
    }

    res.status(200).json({
        mensagem: 'Aluno excluido com sucesso!'
    });
};

module.exports = {
    listarAlunos,
    cadastrarAluno,
    atualizarAluno,
    excluirAluno
};
