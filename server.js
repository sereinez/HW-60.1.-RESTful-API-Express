const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = 3000;

app.use('/', routes);

// Обробка неіснуючих маршрутів
app.use((req, res) => {
  res.status(404).type('text').send('Not found');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
