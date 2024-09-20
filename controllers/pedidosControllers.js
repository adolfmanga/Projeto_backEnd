const db = require('../config/db'); // Importa a conexão com o banco de dados

// Função para obter todas as transações
const getAllPedidos = (req, res) => {
 db.query('SELECT * FROM users', (err, results) => {
 if (err) {
 console.error('Erro ao obter pedidos:', err);
 res.status(500).send('Erro ao obter pedidos');
 return;
 }
 res.json(results);
 });
};

// Função para adicionar uma nova transação
const addPedidos = (req, res) => {
    const { id, name, email, password, endereço } = req.body;

    db.query('INSERT INTO users (id, name, email, password, endereço) VALUES (?, ?, ?, ?, ?)',
    
    [id, name, email, password, endereço],
    (err, results) => {
    if (err) {
    console.error('Erro ao adicionar pedido:', err);
    res.status(500).send('Erro ao adicionar pedido');
    return;
    }
    res.status(201).send('Pedido adicionado com sucesso');
    }
    );
   };

// Função para atualizar uma pedido existente (substituição completa)
const updatePedidosPut = (req, res) => {
    const { id } = req.params;
    const { name, email, password, endereço } = req.body;
    db.query(
    'UPDATE users SET name =?, email = ?, password = ?, endereço = ?, WHERE id = ?',
    [name, email, password, endereço ],
    (err, results) => {
    if (err) {
    console.error('Erro ao atualizar pedido:', err);
    res.status(500).send('Erro ao atualizar pedido');
    return;
    }
    res.send('Pedido atualizada com sucesso');
    }
    );
   };
   
// Função para atualizar uma transação existente (atualização parcial)
const updatePedidosPatch = (req, res) => {
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
    console.error('Erro ao atualizar pedido:', err);
    res.status(500).send('Erro ao atualizar pedido');
    return;
    }
    res.send('Pedido atualizada com sucesso');
    }
    );
   };

   module.exports = {
    getAllPedidos,
    addPedidos,
    updatePedidosPut,
    updatePedidosPatch
   };
