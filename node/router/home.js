import Router from 'koa-router';
import sql_operate from '../sql/sql_operate';
import home from '../sql/home';

const router = new Router();

router.post('/send/message', async (ctx, next) => {
    let {theme, content} = ctx.request.body;
    if (!theme || !content) {
        ctx.body = {
            status: -1,
            msg: '请完善留言内容',
            data: null
        }
        return;
    }
    let addMessage = await home.message({theme, content});
    if (addMessage.insertId > 0) {
        ctx.body = {
            status: 0,
            msg: '留言成功',
            data: null
        }
    }
})

export default router