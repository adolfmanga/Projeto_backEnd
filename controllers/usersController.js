const db = require('../config/db'); // Importa a conexão com o banco de dados

// Função para obter todos os usuarios
const getAllUsers = (req, res) => {
 db.query('SELECT * FROM users', (err, results) => {
 if (err) {
 console.error('Erro ao obter usuarios:', err);
 res.status(500).send('Erro ao obter usuarios');
 return;
 }
 res.json(results);
 });
};

// Função para adicionar um novo usuario
const addUsers = (req, res) => {
    const { id, name, email, password, endereço } = req.body;

    db.query('INSERT INTO users (id, name, email, password, endereço) VALUES (?, ?, ?, ?, ?)',
    
    [id, name, email, password, endereço],
    (err, results) => {
        
    if (err) {
    console.error('Erro ao adicionar usuario:', err);
    res.status(500).send('Erro ao adicionar usuario');
    return;
    }
    res.status(201).send('usuario adicionado com sucesso');
    }
    );
   };

// Função para atualizar um usuario existente (substituição completa)
const updateUsersPut = (req, res) => {
    const { id } = req.params;
    const {name, email, password, endereço } = req.body;
    db.query(
    'UPDATE users SET name = ?, email = ?, password = ?, endereço = ? WHERE id = ?',
    [name, email, password, endereço, id],
    (err, results) => {
    if (err) {
    console.error('Erro ao atualizar o usuario:', err);
    res.status(500).send('Erro ao atualizar usuario');
    return;
    }
    res.send('usuario atualizado com sucesso');
    }
    );
   };
   
// Função para atualizar um usuario existente (atualização parcial)
const updateUsersPatch = (req, res) => {
    const { id } = req.params;
    const fields = req.body;
    const query = [];
    const values = [];
    for (const [key, value] of Object.entries(fields)) {
    query.push(`${key} = ?`);
    values.push(value);
    }
    values.push(id);
    db.query(
    `UPDATE users SET ${query.join(', ')} WHERE id = ?`,
    values,
    (err, results) => {
    if (err) {
    console.error('Erro ao atualizar o usuario:', err);
    res.status(500).send('Erro ao atualizar o usuario');
    return;
    }
    res.send('usuario atualizado com sucesso');
    }
    );
   };

   // Função para deletar um usario existente
const deleteUsers = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM users WHERE id = ?', [id], (err, results) => {
    if (err) {
    console.error('Erro ao deletar o usuario:', err);
    res.status(500).send('Erro ao deletar o usuario');
    return;
    }
    res.send('usuario deletado com sucesso');
    });
   }; 
   

   module.exports = {
    getAllUsers,
    addUsers,
    updateUsersPut,
    updateUsersPatch,
    deleteUsers
   };
