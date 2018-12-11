import Router from 'koa-router';
import sql_operate from '../sql/sql_operate';

const router = new Router();

router.post('/api/login', async (ctx, next) => {
    // TODO
})

router.post('/register', async (ctx, next) => {
    console.log('*******************************')
    ctx.body = {
        a: ''
    }
    let {userName, password} = ctx.request.body;
    console.log('*******', userName, password);
})

export default router