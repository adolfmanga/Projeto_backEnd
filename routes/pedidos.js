const express = require('express'); // Importa o framework Express

const router = express.Router(); // Cria um novo roteador

const PedidosController = require ('../controllers/pedidosControllers');

// Definindo uma rota para obter todas as transações
router.get('/', PedidosController.getAllPedidos);

// Definindo uma rota para adicionar uma nova transação
router.post('/', PedidosController.addPedidos); 

// Definindo uma rota para atualizar uma transação existente (substituição completa)
router.put('/:id', PedidosController.updatePedidosPut);

// Definindo uma rota para atualizar uma transação existente (atualização parcial)
//router.patch('/:id', transactionsController.updateTransactionPatch);









// Exportando o roteador
module.exports = router;