const Contenedor = require('./Contenedor.js')
const express = require('express');

const productos = new Contenedor('./productos.txt')
const app = express();

app.get('/productos', async (req, res, next) => {
  try {
    const productosTodos = await productos.getAll()
    res.send(productosTodos)
  } catch (error) {
    return next(error);
  }
})

app.get('/productosRandom', async (req, res, next) => {
  try {
    const productosTodos = await productos.getAll()
    let productoRandom = productosTodos[Math.floor(Math.random() * ((productosTodos.length - 1) + 1))]
    res.send(productoRandom)
  } catch (error) {
    return next(error);
  }
})

const server = app.listen(8080, () => {
  console.log('Servidor http en el puerto 8080');
})

server.on('error', error => console.log(`Error en el servidor: ${error}`));
