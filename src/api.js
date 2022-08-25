const express = require('express');
const controllerLogin = require('./controllers/controllerLogin');
// ...

const app = express();

app.use(express.json());

// ...
app.post('/login', controllerLogin.login);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
