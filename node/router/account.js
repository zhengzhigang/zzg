import Router from 'koa-router';
import crypto from 'crypto';
import sql_operate from '../sql/sql_operate';
import retCode from '../utils/retcode.js';
import userinfo from '../sql/userinfo.js';
import random from '../utils/random.js'
import Base64 from '../utils/base64.js'

const router = new Router();

// 登录
router.post('/login', async (ctx, next) => {
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
    // 1.获取到的密码截取前面随机数通过base64加密的结果
    let base64Random = userResult[0].password.substring(0, 12);
    // 2.将第一步的结果与用户输入的密码进行拼接
    let newPassword = base64Random + password;
    // 3.将第二步的结果进行md5加密
    let md5 = crypto.createHash('md5');
    let md5Password = md5.update(newPassword).digest('hex');
    // 4.将第三步进行base64加密
    let base64 = new Base64();
    let basePassword = base64.encode(md5Password);
    // 5.将第一步与第四步拼接
    let lastPassword = base64Random + basePassword;
    if (userResult[0].userName !== userName || userResult[0].password !== lastPassword) {
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
    // 1.生成8位随机数
    let randomPass = random(false, 8);
    let base64 = new Base64();
    // 2.对生成的随机数加密
    let base64Random = base64.encode(randomPass);
    // 3.将生成的随机数与密码拼接
    let newPassword = base64Random + password;
    let md5 = crypto.createHash('md5');
    // 4.将第三步的进行md5加密
    let md5Password = md5.update(newPassword).digest('hex');
    // 5.将第四步进行base64加密
    let base64Md5 = base64.encode(md5Password);
    // 6.将第二步与第五步拼接
    let lastPassword = base64Random + base64Md5;
    // 根据用户名得到用户数量
    let userNumResult = await userinfo.getCountByUserName({userName, password: lastPassword});
    console.log('****', userNumResult)
    if (userNumResult > 0) {
        result.code = retCode.UserExisted;
        result.msg = '用户已存在';
        ctx.body = result;
        return;
    }
    // 插入注册数据
    let userResult = await userinfo.add({userName, password: lastPassword});
    if (userResult.insertId <= 0) {
        result.code = retCode.Fail;
        result.msg = '注册失败';
        ctx.body = result;
        return;
    }
    ctx.body = result;
})

export default router