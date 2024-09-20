const dotenv = require('dotenv'); // Importa o pacote dotenv para gerenciar variáveis de ambiente

dotenv.config(); // Carrega as variáveis definidas no arquivo .env para process.env 

const express = require('express'); // Importa o framework Express

const cors = require('cors'); // Importa o pacote cors para permitir requisições de diferentes origens

const bodyParser = require('body-parser'); // Importa o pacote body-parser para analisar o corpo das requisições HTTP 

//importar as bibliotecas
const db = require('./config/db'); // Importa a conexão com o banco de dados 

const pedidosRoutes = require('./routes/pedidos'); // Importa as rotas de transações

const app = express();

app.use(cors()); // Habilita o CORS para todas as rotas

app.use(bodyParser.json()); // Configura o body-parser para analisar requisições JSON

// Usar as rotas de pedidos para todas as requisições que começam com /api/pedidos
app.use('/api/pedidos', pedidosRoutes);

//Rota inicial para testar o servidor
app.get('/', (req, res) => {
    res.send('Servidor está rodando'); // Define uma rota inicial para testar o servidor
   });

const PORT = process.env.PORT || 3000; // Define a porta a parƟr da variável de ambiente ou usa a porta 3000 como padrão

app.listen(PORT, () => {

console.log(`Servidor rodando na porta ${PORT}`);

}); // Escreve uma mensagem informando que o servidor está rodando 