const mysql = require('mysql2');

const conexao = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'banco_exemplo'
});


const novoUsuario = { nome: 'João', idade: 25, email: 'joao@example.com' };

conexao.query('INSERT INTO usuarios SET ?', novoUsuario, (err, resultados) => {
    if (err) {
        console.error('Erro ao inserir usuário:', err);
        return;
    }

    console.log('Novo usuário inserido com sucesso!');
    console.log('ID do novo usuário:', resultados.insertId);
});

conexao.end();
