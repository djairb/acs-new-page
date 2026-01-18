// 1. Importações Essenciais
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs'); // Para criptografar senhas


require('dotenv').config(); // Para carregar as variáveis de ambiente (SECRET_KEY)

// 2. Configuração do Express
const app = express();
app.use(cors());
app.use(express.json());

// 3. Conexão com o Banco de Dados
const db_doacoes = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Karolinne10", // Lembre-se de usar sua senha local
    database: "doacoes_db" // O banco de dados que criamos
});


// Middleware para verificar o Token JWT
const verifyTokenDoacoes = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token não fornecido." });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch {
    return res.status(403).json({ error: "Token inválido." });
  }
};


app.post("/doacoes", async (req, res) => {
  const {
    brindeEscolhido,
    celular,
    cidade,
    complemento,
    endereco,
    numero,
    email,
    nome,
    valorDoado
  } = req.body;

  if (!nome || !valorDoado || !email) {
    return res.status(400).json({ error: "Dados obrigatórios faltando." });
  }

  const sql = `
    INSERT INTO doacoes 
    (brindeEscolhido, celular, cidade, complemento, endereco, numero, dataDoacao, email, nome, valorDoado)
    VALUES (?, ?, ?, ?, ?, ?, NOW(), ?, ?, ?)
  `;

  db_doacoes.query(sql, [
    brindeEscolhido,
    celular,
    cidade,
    complemento,
    endereco,
    numero,
    email,
    nome,
    valorDoado
  ], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao registrar doação." });
    }

    res.status(201).json({ message: "Doação registrada com sucesso!" });
  });
});


app.get("/doacoes", verifyTokenDoacoes, (req, res) => {
  const sql = `
    SELECT 
      id,
      nome,
      email,
      valorDoado,
      dataDoacao,
      cidade,
      brindeEscolhido
    FROM doacoes
    ORDER BY dataDoacao DESC
  `;

  db_doacoes.query(sql, (err, rows) => {
    if (err) {
      return res.status(500).json({ error: "Erro ao buscar doações." });
    }
    res.json(rows);
  });
});


app.delete("/doacoes/:id", verifyTokenDoacoes, (req, res) => {
  const { id } = req.params;

  db_doacoes.query("DELETE FROM doacoes WHERE id = ?", [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Erro ao excluir doação." });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Doação não encontrada." });
    }

    res.json({ message: "Doação excluída com sucesso." });
  });
});

app.post("/login", async (req, res) => {
  const { senha } = req.body;

  if (!senha) {
    return res.status(400).json({ error: "Senha é obrigatória." });
  }

  try {
    // Pega o único usuário (ou o primeiro)
    const sql = "SELECT id, senha FROM usuarios LIMIT 1";

    db_doacoes.query(sql, async (err, rows) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Erro no servidor." });
      }

      if (rows.length === 0) {
        return res.status(401).json({ error: "Usuário não configurado." });
      }

      const usuario = rows[0];

      const senhaValida = await bcrypt.compare(senha, usuario.senha);

      if (!senhaValida) {
        return res.status(401).json({ error: "Senha inválida." });
      }

      // Gera token JWT
      const token = jwt.sign(
        { id: usuario.id },
        process.env.SECRET_KEY,
        { expiresIn: "2h" }
      );

      res.json({ token });

    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno." });
  }
});

app.get("/gerar-hash/:senha", async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.params.senha, salt);
    res.json({ senha_original: req.params.senha, hash_para_o_banco: hash });
});




// Rota de verificação simples
app.get("/", (req, res) => {
    res.send("API de autenticação rodando!");
});

// Inicia o servidor
app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001");
});