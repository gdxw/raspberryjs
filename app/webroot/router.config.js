/**
 * create by daixingwang811 on 2018/06/07
 * 路由配置文件
 */

import Loadable from "react-loadable";      //react-router按需加载插件  
import pageLoading from './components/pageLoading';
import Layout from './layout/layout';

module.exports = [{
    component: Layout,
    routes:[{ 
        path: '/',
        component: Loadable({
            loader:() => import('./page/home'),
            loading: pageLoading
        }),
        exact: true,
        label: '首页',
        icon: 'home',
        key: 'home',
    },{ 
        path: '/todo-list',
        component: Loadable({
            loader:() => import('./page/todo-list'),
            loading: pageLoading
        }),
        label: 'todoList',
        icon: 'appstore-o',
        key: 'todo-list',
        routes: [
            { 
                path: '/todo-list/:id',
                key: 'todo-list-item',
                component: Loadable({
                    loader:() => import('./page/todo-list'),
                    loading: pageLoading
                })
            }
        ]
    },{ 
        path: '/article',
        component:  Loadable({
            loader:() => import('./page/article'),
            loading: pageLoading
        }),
        label: '文章',
        icon: 'file',
        key: 'article',
    },{ 
        path: '/share',
        component: Loadable({
            loader:() => import('./page/share'),
            loading: pageLoading
        }),
        label: '分享',
        icon: 'share-alt',
        key: 'share',
    },{ 
        path: '/book',
        component: Loadable({
            loader:() => import('./page/book'),
            loading: pageLoading
        }),
        label: '书籍',
        icon: 'book',
        key: 'book',
    },{ 
        path: '/about-us',
        component: Loadable({
            loader:() => import('./page/about-us'),
            loading: pageLoading
        }),
        label: '关于我们',
        icon: 'team',
        key: 'about-us',
    }]
}]