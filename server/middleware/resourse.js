module.exports = options => {
    return async(req, res, next) => {
        const modelName = require('inflection').classify(req.params.resourse); //inflection包主要功能是数据格式的转换,其中classify功能是转换类名
        req.modelName = modelName;
        req.Model = require(`../models/${modelName}`);
        next();
    }
}