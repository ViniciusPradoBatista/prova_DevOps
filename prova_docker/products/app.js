const express = require('express');
const app = express();
const port = 3001;

app.get('/products', (req, res) => {
  res.json({
    products: [
      { id: 1, name: 'Computador NASA', price: 23000 },
      { id: 2, name: 'Fone Razer Kraken X', price: 290 }
    ]
  });
});

app.listen(port, () => {
  console.log(`Api Produtos está na porta: ${port}`);
});