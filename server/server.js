// importação e uso do módulo express
const express = require("express");
const app = express();
// módulo do node para lidar com caminho de arquivos
const path = require("path");
// Define a porta do servidor
const port = 3000;

// ROTAS PÚBLICAS
// Criação de rotas padrão
app.get("/", (req, res) => { res.status(200).json({ mensagem: "Olá, seja bem vindo" });});
//Rota que retorna a página de login
app.get("/login", (req, res) => {res.sendFile(path.join(__dirname, "../client/views/auth/login.html"));});
// Rota que retorna a página de cadastro de usuário
app.get("/cadastro", (req, res) => {res.sendFile(path.join(__dirname, "../client/views/auth/cadastro.html"));});

//Importar as rotas de usuário
const usuariosRoutes = require("./routes/usuarioRoutes.js");
// Requisições comecando com /usuarios é gerenciada pelo sub-arquivo de rotas
app.use("/usuarios", usuariosRoutes);

//Função para subir o servidor
app.listen(port, () => {
  console.log(`Servidor ativo na porta: ${port}`);
  console.log(`Link: http://localhost:${port}`);
});
