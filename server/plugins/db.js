module.exports = app => {
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://127.0.0.1:27017/king', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    require('require-all')(__dirname + '/../models') //预防报错，提前引用一边models中的所有模块

}


// let MongoClient = require('mongodb').MongoClient;
// let url = 'mongodb://localhost:27017';

// MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//     if (err) throw err;
//     console.log("数据库已创建!");
//     var dbase = db.db("node-vue-moba");
//     dbase.createCollection('user', function(err, res) {
//         if (err) throw err;
//         console.log("创建集合!");
//     });
//     var myobj = { name: "菜鸟教程1111", url: "www.runoob" };
//     dbase.collection("user").insertOne(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("文档插入成功");
//         db.close();
//     });
// });


// module.exports = myobj => {
//     let MongoClient = require('mongodb').MongoClient;
//     let url = 'mongodb://localhost:27017';

//     MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//         if (err) throw err;
//         console.log("数据库已创建!");
//         var dbase = db.db("node-vue-moba");
//         dbase.createCollection('user', function(err, res) {
//             if (err) throw err;
//             console.log("创建集合!");
//         });
//         dbase.collection("user").insertOne(myobj, function(err, res) {
//             if (err) throw err;
//             console.log("文档插入成功");
//             db.close();
//         });
//     });
// }