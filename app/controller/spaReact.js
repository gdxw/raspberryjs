/**
 * span 单页面应用
 */

'use strict';

const Controller = require('egg').Controller;

class SpaReactController extends Controller {
    // span 页面
    async index() {
        const {ctx} = this;
        await ctx.render('/static/pac.html');
    }
}

module.exports = SpaReactController;
