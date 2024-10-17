const express = require('express'); // Importa o framework Express

const router = express.Router(); // Cria um novo roteador

const estoqueCosmeticosController = require ('../controllers/estoqueCosmeticosController');

// Definindo uma rota para obter todos as pedidos
router.get('/', estoqueCosmeticosController.getAllestoqueCosmeticos);

// Definindo uma rota para adicionar um novo pedido
router.post('/', estoqueCosmeticosController.addestoqueCosmeticos); 

// Definindo uma rota para atualizar um pedido existente (substituição completa)
router.put('/:id', estoqueCosmeticosController.updateestoqueCosmeticosPut);

// Definindo uma rota para atualizar um pedido existente (atualização parcial)
router.patch('/:id', estoqueCosmeticosController.updateestoqueCosmeticosPatch);

// Definindo uma rota para deletar um pedido existente
router.delete('/:id', estoqueCosmeticosController.deleteestoqueCosmeticos);


// Exportando o roteador
module.exports = router;