/**
 * 笑话接口
 */

 const Service = require('egg').Service;
 
 class JokeService extends Service {
    async list(page = 1) {
        const { data: JokeListData }= await this.ctx.curl("http://v.juhe.cn/joke/content/list.php",{
            method: "GET",
            dataAsQueryString: true,
            data: {
                sort: "1418816972",
                page,
                pagesize: 10,
                time: "1418816972",
                key: "fb181a0bef9731bdd7e842de6e11c5fd"
            },
            dataType: 'json',
        })
        if(JokeListData.reason == "Success"){
            return JokeListData.result;
        }else{
            return {}
        }
    }
 }
 
 module.exports = JokeService;
 