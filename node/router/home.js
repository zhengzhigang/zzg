import Router from 'koa-router';
import sql_operate from '../sql/sql_operate';

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
    let connection = sql_operate.connect('zzgsite');
    connection.query(`CREATE TABLE If Not Exists message (
        Id int,
        theme varchar(255),
        content varchar(255)
    )`);
    let id = await sql_operate.count(connection);
    let addSql = `INSERT INTO message(Id, theme, content) VALUES(${id},?,?)`;
    let add = await sql_operate.add(connection, addSql, [theme, content]);
    if (add === 0) {
        ctx.body = {
            status: 0,
            msg: '留言成功',
            data: null
        }
    }
    connection.end();
})

export default router