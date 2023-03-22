---
tags: ["javascript", "express"]
---

# 20230321: Swagger autogen con controllers

- [swagger-autogen](https://github.com/davibaltar/swagger-autogen) es un módulo que permite generar automáticamente documentación para swagger en un proyecto node.

`swagger.js`
```js
// swagger.js
require('dotenv').config(); 
const swaggerAutogen = require('swagger-autogen')();

const PORT = process.env.PORT;
const HOST = `${process.env.HOST}:${PORT}`;

const outputFile = './swagger_output.json';
const endpointsFiles = ['./app.js'];
const doc = {
    info: {
        version: "1.0.0",
        title: "Mi App - API",
        description: "API de Mi App"
    },
    host: HOST,
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    definitions: {
        Login: {
            username: 'user',
            password: 'user'
        },
        AddUsuario: {
            email: "ana@example.com",
            password: "12345",
        },
        UpdateUsuario: {
            email: "ana@gmail.com",
            password: "54321",
        },
        SetPersona: {
            id: 1,
            nombres: "Ana",
            apellidos: "De Armas",
        },
        FullUsuario: {
            nombre: "Ana",
            persona: {
                $ref: '#/definitions/SetPersona'
            }
        },
    }
};

swaggerAutogen(outputFile, endpointsFiles, doc);
```

`package.json`
```json
"scripts": {
    "start": "npm run gendoc && node ./bin/www",
    "dev": "npm run gendoc && nodemon ./bin/www",
    "gendoc": "node swagger.js"
},
```

`app.js`
```js
// app.js
//...
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');
//...
const indexRouter = require('./routes/index/indexRouter');
//...
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
//...
```

`routes\index\indexRouter.js`
```js
// routes\index\indexRouter.js
//...
router.post('/login', async (req, res, next) => {
  /* #swagger.parameters['body'] = {
    in: 'body',
    schema: {
      $ref: '#/definitions/Login'
    }
  } */
  const username = req.body.username;
  const password = req.body.password;
  const loginData = { username, password };
  try {
    const usuario = await loginService.login(loginData);
    res.json(usuario);
  } catch (error) {
    next(error);
  }
  
});
//...
```

- Cuando la funcion controller se pasa a una clase `routes\index\indexController.js`, swagger ya no puede acceder al comentario. Para que siga funcionando, se puede seguir poniéndolo en el router, pero inmediatamente después de la llamada.

`routes\index\indexRouter.js`
```js
// routes\index\indexRouter.js
//...
router.post('/login', indexController.login
    /* #swagger.parameters['body'] = {
        in: 'body',
        schema: {
            $ref: '#/definitions/Login'
        }
    } */ );
//...
```