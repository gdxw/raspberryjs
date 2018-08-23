module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);     //home页面
  router.get('/list', controller.home.list);  //list页面
  router.get('/list2', controller.home.list2);  //list页面
  router.get('/new/:id', controller.home.new);  //new页面
  router.get('/joke', controller.joke.list);    //joke页面
}