/**
 * 侧边栏菜单
 */
import React, { PureComponent } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'

import "./index.less";
import 'antd/lib/dropdown';
import logo from './logo.png';
import logoMin from './logo-min.png';

const { Sider } = Layout;
const { SubMenu,ItemGroup } = Menu;


export default class GlobalSider extends PureComponent {
    constructor(props){
        super(props);
    }
    handleClick (e) {
        console.log('click ', e);
    }

    render() {
        const {collapsed} = this.props;
        const LeftSiderData = this.props.siderData || [{
            label: '首页',
            key: 'home',
            url: '/',
            icon: 'home'
        },{
            label: '日记',
            key: 'diary',
            url: '/diary',
            icon: 'appstore-o'
        },{
            label: '文章',
            key: 'article',
            url: '/article',
            icon: 'file',
            child: [{
                label: '文章分类',
                key: 'article-category',
                url: '/article/category',
            },{
                label: '文章分类2',
                key: 'article-category2',
                url: '/article/category2',
            },{
                label: '文章分类3',
                key: 'article-category3',
                url: '/article/category3',
            }]
        },{
            label: '书籍',
            key: 'book',
            url: '/book',
            icon: 'book'
        },{
            label: '分享',
            key: 'share',
            url: '/share',
            icon: 'share-alt'
        },{
            label: '关于我们',
            key: 'about-us',
            url: '/about-us',
            icon: 'team'
        }]
        let subMenu = LeftSiderData.map((item,index)=>{
            let key = (item.key || index) + '';
            if(item.child && item.child.length){
                return (<SubMenu key={key} title={<span><Icon type={item.icon} /><span>{item.label}</span></span>}>
                {
                    item.child.map((childItem,childIndex)=>{
                    let childKey = (childItem.key || (index+ '-' +childIndex)) + '';
                    return (<Menu.Item key={childKey}><Link to={item.url}><span>{childItem.label}</span></Link></Menu.Item>)
                    })
                }
                </SubMenu>)
            }else{
                return (
                <Menu.Item key={key}>
                    <Link to={item.url}>
                        <Icon type={item.icon} />
                        <span>{item.label}</span>
                    </Link>
                    </Menu.Item>)
            }
        })
        return (
            <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            >
                <div className="logo"><Link to="#"><img  src={collapsed ? logoMin : logo}/></Link></div>
                <Menu
                theme="dark"
                onClick={this.handleClick}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                >
                    {subMenu}
                </Menu>
            </Sider>
        );
    }
}