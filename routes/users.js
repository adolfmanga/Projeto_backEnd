const express = require('express'); // Importa o framework Express

const router = express.Router(); // Cria um novo roteador

const usersController = require ('../controllers/usersController');

// Definindo uma rota para obter todos as pedidos
router.get('/', usersController.getAllUsers);

// Definindo uma rota para adicionar um novo pedido
router.post('/', usersController.addUsers); 

// Definindo uma rota para atualizar um pedido existente (substituição completa)
router.put('/:id', usersController.updateUsersPut);

// Definindo uma rota para atualizar um pedido existente (atualização parcial)
router.patch('/:id', usersController.updateUsersPatch);

// Definindo uma rota para deletar um pedido existente
router.delete('/:id', usersController.deleteUsers); 

// Exportando o roteador
module.exports = router;