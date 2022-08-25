const express = require('express');
const controllerLogin = require('./controllers/controllerLogin');
const controllerUser = require('./controllers/controllerUser');
// ...

const app = express();

app.use(express.json());

// ...
app.post('/login', controllerLogin.login);
app.post('/user', controllerUser.createUser);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
