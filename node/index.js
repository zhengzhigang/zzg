import Koa from 'koa2';
import router from './router';
import session from 'koa-session';
import RedisStore from 'koa2-session-redis';
import {dev} from './config/config.js'
const app = new Koa();

app.use(require('koa-bodyparser')());
// logger
app.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
});

app.keys = [dev.KEYS];
const redis_conf = {
    key: dev.KEYS,
    maxAge: dev.REDIS.maxAge,
    overwrite: true,
    httpOnly: true,  
    rolling: false,
    sign: true,
    store: new RedisStore({
        host: dev.REDIS.host,
        port: dev.REDIS.port,
        password: dev.REDIS.password
    })
}

app.use(session(redis_conf, app));

router(app);

app.listen(dev.PORT);
console.log('service starting...  http://localhost:4002')