'use strict';
const path = require('path');

module.exports = appInfo => {
    const config = {};

    config.view = {
        defaultViewEngine: 'nunjucks',                  //更改默认模版引擎nunjucks
        root: path.join(appInfo.baseDir, 'app/dist')    //更改egg框架的默认目录
    };

    config.static = {
        prefix: '/',
        dir: path.join(appInfo.baseDir, 'app/dist')     //更改静态资源目录
    }

    config.keys = 'keys';

    /**
     * some description
     * @member Config#test
     * @property {String} key - some description
     */
    config.test = {
        key: appInfo.name + '_123456',
    };

    config.news = {
        pageSize: 5,
        serverUrl: 'https://hacker-news.firebaseio.com/v0',
    };

    config.middleware = [
        'robot'
    ];
    
    config.robot = {
        ua: [
          /Baiduspider/i,
        ]
    };

    return config;
};