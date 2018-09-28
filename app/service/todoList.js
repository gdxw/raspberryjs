/**
 * todoList 服务
 * Created by daixingwang 2018/09/21
 */

'use strict';

const Service = require('egg').Service;

class TodoListService extends Service {
    /**
     * doc http://www.test.test.test.com
     */
    async list() {
        const mockData = [{
            title : "http请求拦截器",
            description: "报错拦截提示，加载动画，登陆跳转。",
            content: "报错拦截提示，加载动画，登陆跳转。报错拦截提示，加载动画，登陆跳转。报错拦截提示，加载动画，登陆跳转。报错拦截提示，加载动画，登陆跳转。报错拦截提示，加载动画，登陆跳转。",
            endTime: "2018-10-11",
            startTime: "2018-10-11",
            author: "daixingwang",
            Email: "daixingwang@test.com"
        },{
            title : "通用弹窗提示",
            description: "报错拦截提示，加载动画，登陆跳转。",
            content: "报错拦截提示，加载动画，登陆跳转。报错拦截提示，加载动画，登陆跳转。报错拦截提示，加载动画，登陆跳转。报错拦截提示，加载动画，登陆跳转。报错拦截提示，加载动画，登陆跳转。",
            endTime: "2018-10-11",
            startTime: "2018-10-11",
            author: "daixingwang",
            Email: "daixingwang@test.com"
        },{
            title : "http请求拦截器",
            description: "报错拦截提示，加载动画，登陆跳转。",
            content: "报错拦截提示，加载动画，登陆跳转。报错拦截提示，加载动画，登陆跳转。报错拦截提示，加载动画，登陆跳转。报错拦截提示，加载动画，登陆跳转。报错拦截提示，加载动画，登陆跳转。",
            endTime: "2018-10-11",
            startTime: "2018-10-11",
            author: "daixingwang",
            Email: "daixingwang@test.com"
        }];

        return mockData
    }
}

module.exports = TodoListService;
