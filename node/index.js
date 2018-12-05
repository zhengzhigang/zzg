const Koa = require('koa2');
const app = new Koa();
const router = require('./router');

app.use(require('koa-bodyparser')());
app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(4002);
console.log('service starting...  http://localhost:4002')