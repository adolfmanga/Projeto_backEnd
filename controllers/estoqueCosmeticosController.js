const db = require('../config/db'); // Importa a conexão com o banco de dados

// Função para obter todos os produtos
const getAllestoqueCosmeticos = (req, res) => {
 db.query('SELECT * FROM Almoxarife_Cosméticos', (err, results) => {
 if (err) {
 console.error('Erro ao obter os produtos:', err);
 res.status(500).send('Erro ao obter produtos');
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
    console.error('Erro ao adicionar o produto:', err);
    res.status(500).send('Erro ao adicionar o produto');
    return;
    }
    res.status(201).send('produto adicionado com sucesso');
    }
    );
   };

// Função para atualizar um produto existente (substituição completa)
const updateestoqueCosmeticosPut = (req, res) => {
    const { id } = req.params;
    const {nome, preco, descricao, estoque, validade } = req.body;
    db.query(
    'UPDATE Almoxarife_Cosméticos SET nome = ?, preco = ?, descricao = ?, estoque = ?, validade = ? WHERE id = ?',
    [nome, preco, descricao, estoque, validade, id],
    (err, results) => {
    if (err) {
    console.error('Erro ao atualizar o produto:', err);
    res.status(500).send('Erro ao atualizar o produto');
    return;
    }
    res.send('produto atualizado com sucesso');
    }
    );
   };
   
// Função para atualizar um produto existente (atualização parcial)
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
    console.error('Erro ao atualizar o produto:', err);
    res.status(500).send('Erro ao atualizar o produto');
    return;
    }
    res.send('produto atualizado com sucesso');
    }
    );
   };

   // Função para deletar um usario existente
const deleteestoqueCosmeticos = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM Almoxarife_Cosméticos WHERE id = ?', [id], (err, results) => {
    if (err) {
    console.error('Erro ao deletar o produto:', err);
    res.status(500).send('Erro ao deletar o produto');
    return;
    }
    res.send('produto deletado com sucesso');
    });
   }; 
   
   module.exports = {
    getAllestoqueCosmeticos,
    addestoqueCosmeticos,
    updateestoqueCosmeticosPut,
    updateestoqueCosmeticosPatch,
    deleteestoqueCosmeticos
   };
