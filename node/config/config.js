const dev = {
    KEYS: '__zzghxy__',
    PORT: 4002,
    // redis配置
    REDIS: {
        host: 'localhost',
        port: 6379,
        password: '',
        maxAge: 3600000
    },
    //MYSQL数据库配置
    MYSQL: {
        host: 'localhost',
        user: 'root',
        password: '',
        port: "3306",
        database: 'zzgsite',
        supportBigNumbers: true,
        multipleStatements: true,
        timezone: 'utc'
    }
}

export {
    dev
}