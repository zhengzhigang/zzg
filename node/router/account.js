import Router from 'koa-router';
import sql_operate from '../sql/sql_operate';
import retCode from '../utils/retcode.js';
import userinfo from '../sql/userinfo.js';

const router = new Router();

// router.post('/api/login', async (ctx, next) => {
//     // TODO
// })

router.post('/register', async (ctx, next) => {
    let {userName, password} = ctx.request.body;
    let result = {
        code: retCode.Success,
        msg: '注册成功',
        data: null
    }
    if (!userName || !password) {
        result.code = retCode.ArgsError;
        result.msg = '请完善信息';
        ctx.body = result;
        return
    }
    // 根据用户名得到用户数量
    let userNumResult = await userinfo.getCountByUserName({userName, password});
    console.log('userNumResult', userNumResult)
    if (userNumResult > 0) {
        result.code = retCode.UserExisted;
        result.msg = '用户已存在';
        ctx.body = result;
        return
    }
    // 插入注册数据
    let userResult = await userinfo.add({userName, password});
    if (userResult.insertId <= 0) {
        result.code = retCode.Fail;
        result.msg = '注册失败';
        ctx.body = result;
        return
    }
    ctx.body = result;
})

export default router