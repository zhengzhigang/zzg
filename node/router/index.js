const Router = require('koa-router');
const router = new Router();
const mysql = require('mysql');

router.post('/send/message', async (ctx, next) => {
    let {theme, content} = ctx.request.body;
    // let connection = mysql.createConnection(sql_config.sql('test'));
    // connection.connect();
    // connection.query('CREATE DATABASE position');
    // let addSql = operate.add_sql('positions', 'positionId, positionName, city, createTime, salary, companyId, companyName, companyFullName');
    // let list = [];
    // for (let i = 0; i < this.list.length; i++) {
    //     list.push([this.list[i]['positionId'], this.list[i]['positionName'], this.list[i]['city'], this.list[i]['createTime'], this.list[i]['salary'], this.list[i]['companyId'], this.list[i]['companyName'], this.list[i]['companyFullName']]);
    // }
    // console.log(list)
    // connection.query(addSql,[list],function (err, result) {
    //     if(err){
    //         console.log('[INSERT ERROR] - ',err.message);
    //         return;
    //     }
    // });
    // connection.end();
})

module.exports = router