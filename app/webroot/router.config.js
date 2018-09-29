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
        key: 'home',
        component: Loadable({
            loader:() => import('./page/home'),
            loading: pageLoading
        }),
        exact: true
    },{ 
        path: '/todo-list',
        key: 'todo-list',
        component: Loadable({
            loader:() => import('./page/todo-list'),
            loading: pageLoading
        }),
        routes: [{
            path: '/todo-list/text',
            key: 'todo-list-text',
            component: Loadable({
                loader:() => import('./page/todo-list'),
                loading: pageLoading
            }),
        }]
    },{
        path: '/todo-list/:id',
        key: 'todo-list-item',
        component: Loadable({
            loader:() => import('./page/todo-list'),
            loading: pageLoading
        })
    },{ 
        path: '/article',
        key: 'article',
        component:  Loadable({
            loader:() => import('./page/article'),
            loading: pageLoading
        })
    },{ 
        path: '/share',
        key: 'share',
        component: Loadable({
            loader:() => import('./page/share'),
            loading: pageLoading
        })
    },{ 
        key: 'book',
        path: '/book',
        component: Loadable({
            loader:() => import('./page/book'),
            loading: pageLoading
        }),
       
    },{ 
        key: 'book-add',
        path: '/book-add',
        component: Loadable({
            loader:() => import('./page/book'),
            loading: pageLoading
        }),
    },{ 
        key: 'book-admin',
        path: '/book-admin',
        component: Loadable({
            loader:() => import('./page/book'),
            loading: pageLoading
        }),
       
    },{ 
        path: '/about-us',
        key: 'about-us',
        component: Loadable({
            loader:() => import('./page/about-us'),
            loading: pageLoading
        })
    }]
}]