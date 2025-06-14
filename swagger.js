const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Contacts Api',
        description: 'Contacts Api'
    },
    host: 'localhost:3000',
    schemes: ['http', 'https'],
    basePath: '/'
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// this will genterate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);

