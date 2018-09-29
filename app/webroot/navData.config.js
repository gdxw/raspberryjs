//侧边栏导航数据
module.exports = [{
    label: '首页',  //名称
    icon: 'home',   //icon图标
    key: 'home',     //对应路由的key 唯一标示
    url: '/'
},{
    label: 'todoList',
    icon: 'appstore-o',
    key: 'todo-list',
    children: [{
        label: 'todoList-item',
        icon: 'appstore-o',
        key: 'todo-list-item',
        url: '/todo-list/1'
    }]
},{
    label: '文章',
    icon: 'file',
    key: 'article',
    url: '/article'
},{
    label: '分享',
    icon: 'share-alt',
    key: 'share',
    url: '/share'
},{
    label: '书籍',
    icon: 'book',
    key: 'book',
    children: [{
        label: 'book-item',
        icon: 'appstore-o',
        key: 'book-item',
        url: '/book'
    },{
        label: '书籍管理',
        icon: 'appstore-o',
        key: 'book-admin',
        url: '/book-admin'
    },{
        label: '书籍添加',
        icon: 'appstore-o',
        key: 'book-add',
        url: '/book-add'
    }]
},{
    label: '关于我们',
    icon: 'team',
    key: 'about-us',
    url: '/about-us'
}]