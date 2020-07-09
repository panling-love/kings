const express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

app.set('secret', 'aDad9a484sa5d4awvgg') //声明一个变量，待会儿用于密钥生成token

app.use(require('cors')());
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use('/uploads', express.static(__dirname + '/uploads')) //将所有上传的文件放入uploads文件中静态托管
app.use('/admin', express.static(__dirname + '/admin')) //将所有上传的文件放入uploads文件中静态托管
app.use('/web', express.static(__dirname + '/web')) //将所有上传的文件放入uploads文件中静态托管
    // app.post('/admin/api/categories', (req, res) => {
    //     res.send("hahaha...");
    // })

// app.use('/admin/api', require('./routes/admin'));

// app.post('/admin/api/categories', (req, res) => {
//     console.log(req.body);
//     require('./plugins/db')(req.body);
//     res.send('ok')

// })


require('./plugins/db')(app);
require('./routes/admin')(app);
require('./routes/web')(app);


app.listen(3000, () => {
    console.log('http://localhost:3000')
})