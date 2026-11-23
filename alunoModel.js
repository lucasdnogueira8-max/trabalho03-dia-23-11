
let alunos = [];

let proximoId = 1;

// Listar alunos
function listarAlunos() {
    return alunos;
}

// Cadastrar aluno
function cadastrarAluno(nome, email, matricula) {
    const aluno = {
        id: proximoId,
        nome: nome,
        email: email,
        matricula: matricula
    };

    proximoId++;

    alunos.push(aluno);

    return aluno;
}

// Buscar aluno pelo ID
function buscarAluno(id) {
    return alunos.find(aluno => aluno.id === Number(id));
}

// Atualizar aluno
function atualizarAluno(id, nome, email, matricula) {
    const aluno = buscarAluno(id);

    if (aluno) {
        aluno.nome = nome;
        aluno.email = email;
        aluno.matricula = matricula;
    }

    return aluno;
}

// Excluir aluno
function excluirAluno(id) {
    const aluno = buscarAluno(id);

    if (aluno) {
        alunos = alunos.filter(aluno => aluno.id !== Number(id));
    }

    return aluno;
}

module.exports = {
    listarAlunos,
    cadastrarAluno,
    buscarAluno,
    atualizarAluno,
    excluirAluno
};
