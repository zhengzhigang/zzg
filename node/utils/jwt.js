const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');

class Jwt {
    cosntructor(data) {
        this.data = data;
    }
    // 生成token
    generateToken() {
        let data = this.data;
        let created = Math.floor(Date.now() / 1000);
        let cert = '';
        let token = jwt.sign({
            data,
            exp: created + 60 * 30
        }, 'shhhhh');
        return token;
    }

    // 验证token
    verifyToken() {
        let token = this.data;
        let res;
        try {
            let result = jwt.verify(token, 'shhhhh') || {};
            let {exp = 0} = result, current = Math.floor(Date.now() / 1000);
            if (current <= exp) {
                res = result.data || {};
            }
        } catch (e) {
            res = 'err';
        }
        return res;
    }
}

export default Jwt;