const mysql2=require('mysql2')
const Connection = require('mysql2/typings/mysql/lib/Connection')

const mtSql=mysql2.createConnection({
    host:'localhost',
    user:'root',
    database:'users',
    password:''
})

module.exports = mtSql