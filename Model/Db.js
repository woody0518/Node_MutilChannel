/**
 * Created by Administrator on 2016/2/10.
 */
var mysql = require('mysql');  //调用MySQL模块
var DB_NAME = "mutiChannel";
var TABLE_USER = "channelUser";

function User(user) {
    this.username = user.username;
}

//创建一个connection
function connectServer() {
    var connection = mysql.createConnection({
        host: '192.168.0.100',       //主机
        user: 'root',               //MySQL认证用户名
        password: 'woody@0518',        //MySQL认证用户密码
        port: '3306',                   //端口号
        database: DB_NAME
    });

    return connection;
}

function registeUser(client, username, password, callback) {
    client.query('insert into ' + TABLE_USER + 'value(?,?)')
}

//var connection = mysql.createConnection({
//    host: '192.168.0.100',       //主机
//    user: 'root',               //MySQL认证用户名
//    password: 'woody@0518',        //MySQL认证用户密码
//    port: '3306',                   //端口号
//});


//执行SQL语句
//connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
//    if (err) {
//        console.log('[query] - :' + err);
//        return;
//    }
//    console.log('The solution is: ', rows[0].solution);
//});

//关闭connection
//connection.end(function (err) {
//    if (err) {
//        return;
//    }
//    console.log('[connection end] succeed!');
//});
