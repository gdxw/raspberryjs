module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);     //home页面
    router.get('/list', controller.home.list);  //list页面
    router.get('/list2', controller.home.list2);  //list页面
    router.get('/new/:id', controller.home.new);  //new页面
    router.get('/joke', controller.joke.list);    //joke页面

    router.get('/spa', controller.spaReact.index);   //spa单页面

    router.get('/api/todo-list/list',controller.todoList.list); //todoList 列表
}