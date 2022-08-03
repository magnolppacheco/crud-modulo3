const express = require('express');
const cors = require('cors');
const { request } = require('express');

const port = 3000;
const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});
