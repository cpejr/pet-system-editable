const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const express = require('express');

const app = express();

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Pet System',
      description: 'Documentação do projeto Pet System feito pela Tribo Psique',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
      },
      {
        url: 'https://petsystem.vercelapp.com/api',
      },
    ],
  },
  apis: ['./src/docs/**/*.js'],
};

const specs = swaggerJsDoc(swaggerOptions);

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true }),
);

app.listen(3333, () => {
  console.log('Docs listening on port 3333'); //eslint-disable-line
});
