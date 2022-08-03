const express = require('express');
const cors = require('cors');
const { request } = require('express');

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());

const linguagens = [
  {
    id: 1,
    termo: 'Javascript',
    descricao: 'lalalala',
    logo: 'caminho imagem',
    ano_de_criacao: '2022',
  },
  {
    id: 2,
    termo: 'Python',
    descricao: 'lalala',
    logo: 'caminho imagem',
    ano_de_criacao: '2022',
  },

  {
    id: 3,
    termo: 'Java',
    descricao: 'lalala',
    logo: 'caminho imagem',
    ano_de_criacao: '2022',
  },
];

app.get('/linguagens/todas-linguagens', (req, res) => {
  res.send(linguagens);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});
