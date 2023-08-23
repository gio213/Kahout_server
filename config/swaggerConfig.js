

// Swagger openApi config
const swaggerOptions = {
    definition: {
        openapi: '3.0.0', // openApi version
        info: {
            title: 'Kahoot',
            version: '1.0.0', 
        },
    },
    apis: ['./routes/*.js'], 
  };
  
 
  export default swaggerOptions ;
