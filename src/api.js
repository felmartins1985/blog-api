const express = require('express');
// const controllerLogin = require('./controllers/controllerLogin');
// const controllerUser = require('./controllers/controllerUser');
// const controllerCategory = require('./controllers/controllerCategory');
// const controllerPost = require('./controllers/controllerPost');
const routes = require('./routes');
const auth = require('./middlewares/auth');
// ...

const app = express();

app.use(express.json());

// ...
app.post('/login', routes.login);
app.post('/user', routes.createUser);
app.get('/user', auth, routes.getAllUsers);
app.delete('/user/me', auth, routes.deleteUser);
app.get('/user/:id', auth, routes.getUserById);
app.post('/categories', auth, routes.createCategory);
app.get('/categories', auth, routes.getAllCategories);
app.post('/post', auth, routes.createPost);
app.get('/post', auth, routes.getAllPosts);
app.get('/post/search', auth, routes.searchPost);
app.get('/post/:id', auth, routes.getPostById);
app.put('/post/:id', auth, routes.updatedPost);
app.delete('/post/:id', auth, routes.deletePost);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
