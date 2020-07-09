const mongoose = require('mongoose');

const heroSchema = new mongoose.Schema({
    name: String,
    pic: String,
    banner: String,
    // parent: mongoose.SchemaTypes.ObjectId,
    title: String,
    categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }], //表示一个数组，使一个英雄可以关联多个数据
    scores: {
        difficult: { type: Number, default: 0 },
        skills: Number,
        attack: Number,
        survive: Number,
    },
    skills: [{
        pic: { type: String },
        name: { type: String },
        delay: { type: String },
        cost: { type: String },
        description: { type: String },
        tips: { type: String },

    }],
    //顺风出装
    items1: [{
        type: mongoose.SchemaTypes.ObjectId, //关联其他表必须要定义该字段
        ref: 'Tool'
    }],
    //逆风出装
    items2: [{
        type: mongoose.SchemaTypes.ObjectId, //关联其他表必须要定义该字段
        ref: 'Tool'
    }],
    //使用技巧
    usageTips: { type: String },
    //对抗技巧
    battleTips: { type: String },
    //团战思路
    teamTips: { type: String },
    //英雄关系  只要是多个就用数组定义
    partners: [{
        hero: { type: mongoose.SchemaTypes.ObjectId, ref: 'Hero' },
        description: { type: String }
    }]
})


module.exports = mongoose.model('Hero', heroSchema, 'heros');