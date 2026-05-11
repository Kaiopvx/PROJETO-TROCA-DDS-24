// importação e uso do módulo express
const express = require("express");
const app = express();
// módulo do node para lidar com caminho de arquivos
const path = require("path");
// Define a porta do servidor
const port = 3000;

// CONFIGURAÇÃO DO EJS E PASTAS DO FRONT END
// Define o EJS como engine do front
app.set("view engine", "ejs");
// Aponta para o express e ejs onde estão as páginas
app.set("views", path.join(__dirname, "../client/views"));
// Deixa a pasta public acessível ao usuário
app.set(express.static(path.join(__dirname, "../client/public")));

// ROTAS PÚBLICAS
// Criação de rotas padrão
app.get("/", (req, res) => {
  // Redireciona pra tela de login
  res.status(200).redirect("/login");
});

//Rota que retorna a página de login
app.get("/login", (req, res) => {
  res.render('auth/login');
});

// Rota que retorna a página de cadastro de usuário
app.get("/cadastro", (req, res) => {
  res.render('auth/cadastro');
});

//Importar as rotas de usuário
const usuariosRoutes = require("./routes/usuarioRoutes.js");
// Requisições comecando com /usuarios é gerenciada pelo sub-arquivo de rotas
app.use("/usuarios", usuariosRoutes);

//Função para subir o servidor
app.listen(port, () => {
  console.log(`Servidor ativo na porta: ${port}`);
  console.log(`Link: http://localhost:${port}`);
});
