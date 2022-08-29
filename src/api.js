const express = require('express');
// ...

const app = express();
const { loginRouter, userRouter, categoryRouter, postRouter } = require('./router');

app.use(express.json());

// ...
app.use('/login', loginRouter);
app.use('/categories', categoryRouter);
app.use('/user', userRouter);
app.use('/post', postRouter);
///
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
