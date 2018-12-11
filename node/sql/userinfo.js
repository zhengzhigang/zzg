
import query from './mysql_pool.js'

const userinfo = {
    /**
     * 增加一条参数
     * @param {object} args 参数
     * @return {object}     结果
     */
    async add(args) {
        let sql = 'INSERT INTO userinfo(userName, password) VALUES(?, ?)';
        let params = [args.username, args.password];
        let result = await query(sql, params);
        return result;
    },

    /**
     * 根据userName得到一条数据
     * @param {object} args 参数
     * @return {object}     结果
     */
    async getByUserName(args) {
        let sql = 'SELECT Id, userName, password FROM userinfo WHERE userName = ?';
        let params = [args.username];
        let result = await query(sql, params);
        return result;
    },

    /**
     * 根据userName得到数量
     * @param {object} args 参数
     * @return {object}     结果
     */
    async getCountByUserName(args) {
        let sql = 'SELECT COUNT(1) AS UserNum FROM userinfo WHERE userName = ?';
        let params = [args.username];
        let result = await query(sql, params);
        return result;
    }
}

export default userinfo;