const express = require('express');
const controllerLogin = require('./controllers/controllerLogin');
const controllerUser = require('./controllers/controllerUser');
const auth = require('./middlewares/auth');
// ...

const app = express();

app.use(express.json());

// ...
app.post('/login', controllerLogin.login);
app.post('/user', controllerUser.createUser);
app.get('/user', auth, controllerUser.getAllUsers);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
