import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Mi API con Express',
      version: '1.0.0',
      description: 'Documentación generada con Swagger',
    },
    servers: [
      {
        url: 'http://localhost:3033',
      },
    ],
  },
  // Archivos donde definiremos anotaciones Swagger
  apis: ['./routes/*.js'], 
};

export const swaggerSpec = swaggerJsdoc(options);
export const swaggerUiMiddleware = swaggerUi;
