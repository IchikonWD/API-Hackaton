const dotenv = require('dotenv');
dotenv.config();

const env = process.env.NODE_ENV || 'development';
const PORT = process.env.ODE_PORT || 5000;

const swaggerDocument = {
  swagger: '2.0',
  info: {
    title: 'Hackaton API',
    version: '1.0.0',
    description: 'Hackaton JOBMADRID Challenge API',
    contact: {
      name: 'Ezequiel Migueles Abraira',
      email: 'ezequiel.miguelesabraira@gmail.com',
    },
    license: {
      name: 'MIT',
      url: 'https://opensource.org/licenses/MIT',
    },
  },
  host: 'localhost:' + PORT,
  basePath: `/api/${env}/v1`,
  schemes: ['http', 'https'],
  paths: {
    '/file': {
      post: {
        tags: ['File'],
        summary: 'Send a file',
        description: 'Send a file and receive the ECM',
        operationId: 'getFile',
        consumes: ['multipart/form-data'],
        produces: ['application/json'],
        parameters: [
          {
            name: 'file',
            in: 'formData',
            description: 'File to be processed',
            required: true,
            type: 'file',
          },
        ],
        responses: {
          200: {
            description: 'Successful operation',
          },
          400: {
            description: 'Bad Request',
          },
          500: {
            description: 'Internal Server Error',
          },
        },
      },
    },
  },
};

module.exports = swaggerDocument;
