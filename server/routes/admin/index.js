// let express = require('express'),
//     route = express.Router(); //基于express创建一个route,用法和app一样

// route.post('/categories', (req, res) => {
//     res.send("hahahaaaaaa...");
// })

// module.exports = route;


// module.exports = app => {
//     let express = require('express'),
//         route = express.Router();

//     route.post('/categories', (req, res) => {
//         res.send("hahah445a...");
//     })

//     app.use('/admin/api', route);
// }

/*
module.exports = app => {
    const express = require('express'),
        route = express.Router(),
        category = require('../../models/category')


    route.post('/categories', async(req, res) => {
        const model = await category.create(req.body);
        res.send(model);
    })

    route.put('/categories/:id', async(req, res) => {
        const model = await category.findByIdAndUpdate(req.params.id, req.body);
        res.send(model);
    })

    route.delete('/categories/:id', async(req, res) => {
        await category.findByIdAndDelete(req.params.id, req.body);
        res.send({
            success: true
        });
    })

    route.get('/categories', async(req, res) => {
        const items = await category.find().populate('parent').limit(10)
        res.send(items);
    })

    route.get('/categories/:id', async(req, res) => {
        const model = await category.findById(req.params.id).limit(10)
        res.send(model);
    })

    app.use('/admin/api', route);
}
*/


//封装通用CUUD接口

module.exports = app => {
    const express = require('express'),
        AdminUser = require('../../models/AdminUser'),
        jwt = require('jsonwebtoken'),
        assert = require('http-assert');
    route = express.Router({
        mergeParams: true //使route可以访问app.use中的参数
    });
    route1 = express.Router({
        mergeParams: true //使route可以访问app.use中的参数
    });


    //提交资源
    route.post('/', async(req, res) => {
        const model = await req.Model.create(req.body);
        res.send(model);
    })

    //更新资源
    route.put('/:id', async(req, res) => {
        const model = await req.Model.findByIdAndUpdate(req.params.id, req.body);
        res.send(model);
    })


    //创建资源
    route.post('/:id', async(req, res) => {
        const model = await req.Model.create(req.body);
        res.send(model);
    })

    //删除资源
    route.delete('/:id', async(req, res) => {
        await req.Model.findByIdAndDelete(req.params.id, req.body);
        res.send({
            success: true
        });
    })

    //资源列表
    route.get('/', async(req, res) => {
        let queryOptions = {};
        if (req.modelName === 'Category') {
            queryOptions.populate = 'parent';
        }
        if (req.modelName === 'Article') {
            queryOptions.populate = 'parent';
        }
        const items = await req.Model.find().setOptions(queryOptions).limit(100) //表示关联查询populate('parent')填充替代了原有的parent字段

        // const items = await req.Model.find().populate('parent').limit(100) //表示关联查询populate('parent')填充替代了原有的parent字段
        // const items = await req.Model.find().limit(10)

        res.send(items);

    })

    //资源详情
    route.get('/:id', async(req, res) => {
        const model = await req.Model.findById(req.params.id).limit(100)
        res.send(model);
    })

    // route.get('/:id', async(req, res) => {
    //     console.log('aa')
    //     const model = await req.Model.find().limit(10)
    //     res.send(model);
    // })

    //登录校验中间件
    const authMiddleware = require('../../middleware/auth');
    //model处理中间件
    const resourseMiddleware = require('../../middleware/resourse');
    //资源CRUD接口
    app.use('/admin/api/rest/:resourse', authMiddleware(), resourseMiddleware(), route)


    //资源上传接口
    //由于express不能获取到上传文件的数据，所以这里通过multer插件来获取文件数据
    const multer = require('multer'); //将上传的文件数据复制到了req.file上
    const upload = multer({ dest: __dirname + '/../../uploads' }); //这里__dirname表示admin这个文件夹的绝对地址
    //这里upload.single('file')表示接受一个文件
    app.post('/admin/api/upload', authMiddleware(), upload.single('file'), async(req, res) => {
        const file = req.file;
        file.url = `http://localhost:3000/uploads/${file.filename}`; //拼接返回给前端的url
        res.send(file);
    })

    //登录接口
    app.post('/admin/api/login', async(req, res) => {
        const { username, password } = req.body;
        //根据用户名找用户
        const user = await AdminUser.findOne({
            username: username
        }).select('+password')
        assert(user, 422, '用户不存在')
            // if (!user) {
            //     return res.status(422).send({
            //         message: '用户不存在'
            //     })
            // }
            //校验密码
        const isValid = require('bcryptjs').compareSync(password, user.password) //返回的是boolen
        assert(isValid, 422, '密码错误')
            // if (!isValid) {
            //     return res.status(422).send({
            //         message: '密码错误'
            //     })
            // }
            //返回token
        const token = jwt.sign({
                id: user._id,
                _id: user._id,
                username: user.username
            }, app.get('secret')) //第一个参数：将自定义的数据加入token 第二个参数密钥(根据密钥和算法生成token,客户端不需要密钥就可以解出token,但是要验证token是否正确就只能用jwt.verify来校验)
        res.send({ token });
    })

    //错误处理函数
    app.use(async(err, req, res, next) => {
        res.status(err.statusCode || 500).send({
            message: err.message
        })
    })
}