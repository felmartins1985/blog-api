const express = require('express');
const controllerLogin = require('./controllers/controllerLogin');
const controllerUser = require('./controllers/controllerUser');
const controllerCategory = require('./controllers/controllerCategory');
const controllerPost = require('./controllers/controllerPost');

const auth = require('./middlewares/auth');
// ...

const app = express();

app.use(express.json());

// ...
app.post('/login', controllerLogin.login);
app.post('/user', controllerUser.createUser);
app.get('/user', auth, controllerUser.getAllUsers);
app.delete('/user/me', auth, controllerUser.deleteUser);
app.get('/user/:id', auth, controllerUser.getUserById);
app.post('/categories', auth, controllerCategory.createCategory);
app.get('/categories', auth, controllerCategory.getAllCategories);
app.post('/post', auth, controllerPost.createPost);
app.get('/post', auth, controllerPost.getAllPosts);
app.get('/post/search', auth, controllerPost.searchPost);
app.get('/post/:id', auth, controllerPost.getPostById);
app.put('/post/:id', auth, controllerPost.updatedPost);
app.delete('/post/:id', auth, controllerPost.deletePost);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
