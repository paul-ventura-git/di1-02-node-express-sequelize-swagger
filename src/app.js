const express = require('express');
const { swaggerSpec, swaggerUiMiddleware } = require('../config/swagger.js');
const app = express();
const routes = require('./routes');

app.use(express.json());
app.use('/api', routes);
app.use('/api-docs', swaggerUiMiddleware.serve, swaggerUiMiddleware.setup(swaggerSpec));
app.get('/favicon.ico', (req, res) => res.status(204).end());

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

module.exports = app;
