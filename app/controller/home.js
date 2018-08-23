const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'Hello world';
  }

  async list() {
    const dataList = {
      list: [
        { id: 1, title: 'this is news 1', url: '/new/1' },
        { id: 2, title: 'this is news 2', url: '/new/2' }
      ]
    };
    await this.ctx.render('news/list.html', dataList);
  }

  async list2() {
    const {ctx} = this;
    const page = ctx.query.page || 1;
    const newsList = await ctx.service.news.list(page);
    await ctx.render('news/list.html', { list: newsList });
  }

  async new(){
    const {ctx} = this;
    let id = ctx.params.id;
    const data = {
      detile: `我是detile ${id}`,
      title: `title ${id}`
    }
    await ctx.render('news/new.html', data);
  }
}

module.exports = HomeController;