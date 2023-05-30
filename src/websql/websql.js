import Vue from 'vue'

const WebSql = function () {
    if (window.openDatabase) {
        //openDatabase('数据库名称','版本','数据库描述','数据库大小')
        const db = openDatabase('mydb', '1.0', 'ToolDB', 200 * 1024 * 1024);
        Vue.prototype.$db = db;
        if (!db) {
            console.log("数据库创建失败！");
        } else {
            console.log('本地数据库创建成功！');
        }

        // 初始化表
        db.transaction(tx => {
            tx.executeSql("CREATE TABLE IF NOT EXISTS connection (connectionId unique primary key, name, url)");
            tx.executeSql("insert into connection (connectionId , name, url) values (1, '测试', '')", [], (tx, rs) => {
                    console.log("执行SQL成功:", rs)
                },
                (tx, err) => {
                    console.log("执行SQL失败：", err)
                });
            },
            (tx, err) => { console.log(" create table connection error,  ", err) })
    } else {
        console.log('不支持本地存储！');
    }
};
export default WebSql;
