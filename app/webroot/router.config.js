/**
 * create by daixingwang811 on 2018/06/07
 * 路由配置文件
 */

import Layout from './layout/layout'
import Home from './page/home'
import Code from './page/code'
import List from './page/list'
import Aboutus from './page/about-us'
import Article from './page/article'
import Book from './page/book'
import Diary from './page/diary'
import Share from './page/share'

module.exports = [{
    component: Layout,
    routes:[{ 
        path: '/',
        component: Home,
        exact: true,
        label: '首页',
        icon: 'home',
        key: 'home',
    },{ 
        path: '/diary',
        component: Diary,
        label: '日记',
        icon: 'appstore-o',
        key: 'diary',
    },{ 
        path: '/article',
        component: Article,
        label: '文章',
        icon: 'file',
        key: 'article',
    },{ 
        path: '/share',
        component: Share,
        label: '分享',
        icon: 'share-alt',
        key: 'share',
    },{ 
        path: '/book',
        component: Book,
        label: '书籍',
        icon: 'book',
        key: 'book',
    },{ 
        path: '/about-us',
        component: Aboutus,
        label: '关于我们',
        icon: 'team',
        key: 'about-us',
    }]
}]