const express = require('express');
const cors = require('cors');
const productsControllers = require('./products-controllers');
const usersControllers = require('./users-controllers')
const app = express();
const port = 3000;
app.use(cors())
app.use(express.json())


app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers"
  );
  next();
});


app.get('/', (req, res) => {
  productsControllers.getProducts()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
});
app.post('/products', (req, res) => {
  productsControllers.createProducts(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
});
app.put("/products/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  productsControllers.updateProducts(id, body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.delete('/products/:id', (req, res) => {
  productsControllers.deleteProducts(req.params.id)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
});

app.get('/user', (req, res) => {
  usersControllers.getUsers()
  .then(response => {
      res.status(200).send(response)
  })
  .catch(error => {
      res.status(500).send(error)
  })
});
app.post('/new-user', (req, res) => {
  usersControllers.createUsers(req.body)
    .then(response => {
      res.status(200).json({ message: "Usuario creado exitosamente!" });
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    })
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
