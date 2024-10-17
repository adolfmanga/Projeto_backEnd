const db = require('../config/db'); // Importa a conexão com o banco de dados

// Função para obter todas as transações
const getAllestoqueCosmeticos = (req, res) => {
 db.query('SELECT * FROM Almoxarife_Cosméticos', (err, results) => {
 if (err) {
 console.error('Erro ao obter usuarios:', err);
 res.status(500).send('Erro ao obter usuarios');
 return;
 }
 res.json(results);
 });
};

// Função para adicionar um novo usuario
const addestoqueCosmeticos = (req, res) => {
    const {id, nome, preco, descricao, estoque, validade } = req.body;

    db.query('INSERT INTO Almoxarife_Cosméticos (id, nome, preco, descricao, estoque, validade) VALUES (?, ?, ?, ?, ?, ?)',
    
    [id, nome, preco, descricao, estoque, validade],
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
const updateestoqueCosmeticosPut = (req, res) => {
    const { id } = req.params;
    const {nome, preco, descricao, estoque, validade } = req.body;
    db.query(
    'UPDATE Almoxarife_Cosméticos SET nome = ?, preco = ?, descricao = ?, estoque = ?, validade = ? WHERE id = ?',
    [nome, preco, descricao, estoque, validade, id],
    (err, results) => {
    if (err) {
    console.error('Erro ao atualizar o usuario:', err);
    res.status(500).send('Erro ao atualizar usuario');
    return;
    }
    res.send('usuario atualizada com sucesso');
    }
    );
   };
   
// Função para atualizar um usuario existente (atualização parcial)
const updateestoqueCosmeticosPatch = (req, res) => {
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
    `UPDATE Almoxarife_Cosméticos SET ${query.join(', ')} WHERE id = ?`,
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
const deleteestoqueCosmeticos = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM Almoxarife_Cosméticos WHERE id = ?', [id], (err, results) => {
    if (err) {
    console.error('Erro ao deletar o usuario:', err);
    res.status(500).send('Erro ao deletar o usuario');
    return;
    }
    res.send('usuario deletado com sucesso');
    });
   }; 
   
   module.exports = {
    getAllestoqueCosmeticos,
    addestoqueCosmeticos,
    updateestoqueCosmeticosPut,
    updateestoqueCosmeticosPatch,
    deleteestoqueCosmeticos
   };
