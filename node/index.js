import Koa from 'koa2';
import router from './router';
const app = new Koa();

app.use(require('koa-bodyparser')());
app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(4002);
console.log('service starting...  http://localhost:4002')