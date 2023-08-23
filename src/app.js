const express = require('express');
const path = require('path');
const sequelize = require('./database/database');
const server = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear el cuerpo de las solicitudes como JSON
server.use(express.json());

// Configurar vistas y directorio público
server.set('view engine', 'pug');
server.set('views', path.join(__dirname, 'views'));
server.use(express.static(path.join(__dirname, '../public')));

// Rutas
const indexRoutes = require('./routes/index.routes');
server.use('/', indexRoutes);

// Manejo de rutas no encontradas
server.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '../public/404.html'));
});

// Sincronizar la base de datos y luego iniciar el servidor
sequelize
  .sync()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Error syncing database:', error);
  });