import Router from 'koa-router';
import sql_operate from '../sql/sql_operate';
import retCode from '../utils/retcode.js';
import userinfo from '../sql/userinfo.js';

const router = new Router();

// 登录
router.post('/login', async (ctx, next) => {
    console.log('****', ctx.session)
    let {userName, password} = ctx.request.body;
    let result = {
        code: retCode.Success,
        data: null,
        msg: '登录成功'
    }
    if (!userName || !password) {
        result.code = retCode.ArgsError;
        result.msg = '请完善登录信息';
        ctx.body = result;
        return;
    }
    // 根据用户名得到用户信息
    let userResult = await userinfo.getByUserName({userName, password});
    if (userResult.length === 0) {
        result.code = retCode.UserNotExist;
        result.msg = '用户不存在';
        ctx.body = result;
        return;
    }
    if (userResult[0].userName !== userName || userResult[0].password !== password) {
        result.code = retCode.UsernameOrPasswordError;
        result.msg = '用户名或密码错误';
        ctx.body = result;
        return;
    }
    // 将用户ID存入session中
    ctx.session = {id: userResult[0].Id}
    ctx.body = result;
})

// 注册
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
        return;
    }
    // 根据用户名得到用户数量
    let userNumResult = await userinfo.getCountByUserName({userName, password});
    console.log('userNumResult', userNumResult)
    if (userNumResult > 0) {
        result.code = retCode.UserExisted;
        result.msg = '用户已存在';
        ctx.body = result;
        return;
    }
    // 插入注册数据
    let userResult = await userinfo.add({userName, password});
    if (userResult.insertId <= 0) {
        result.code = retCode.Fail;
        result.msg = '注册失败';
        ctx.body = result;
        return;
    }
    ctx.body = result;
})

export default router