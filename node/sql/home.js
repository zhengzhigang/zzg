import query from './mysql_pool.js'

const home = {
    /**
     * 留言
     * @param {object} args 参数
     * @return {object}     结果
     */
    async message(args) {
        let sql = 'INSERT INTO message(theme, content) VALUES(?, ?)';
        let params = [args.theme, args.content];
        let result = await query(sql, params);
        return result;
    }
}

export default home;