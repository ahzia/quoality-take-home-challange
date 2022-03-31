import swaggerAutogen from 'swagger-autogen';

const outputFile = './swagger_output.json';
const endpointsFiles = ['./index.js'];
const doc = {
  info: {
    title: 'QUOALITY API',
  },
  host: 'quoality.herokuapp.com',
  schemes: ['http'],
};

swaggerAutogen()(outputFile, endpointsFiles, doc);
