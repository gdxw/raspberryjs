const Controller = require('egg').Controller;

class JokeController extends Controller{
    async list(){
        const ctx = this.ctx;
        const page = ctx.query.page || 1;
        const jokeData = await ctx.service.joke.list(page);
        ctx.body = {
            success: true,
            data: jokeData
        };
    }
}

module.exports = JokeController;