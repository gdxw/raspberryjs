/**
 * todoList 
 * Created by daixingwang  2018/09/21
 */

'use strict';

const Controller = require('egg').Controller;

class TodoListController extends Controller {
    async list() {
        const { ctx } = this;  
        ctx.body = {
            success: true,
            message: "请求成功",
            code: 200,
            data: {
                todoList: await ctx.service.todoList.list()
            }
        }
    }
}

module.exports = TodoListController;
