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
        const {collapsed, defaultSelectedKeys,defaultOpenKeys} = this.props;
        const LeftSiderData = this.props.siderData || [];
        let subMenu = LeftSiderData.map((item,index)=>{
            let key = (item.key || index) + '';
            if(item.children && item.children.length){
                return (<SubMenu key={key} title={<span><Icon type={item.icon} /><span>{item.label}</span></span>}>
                {
                    item.children.map((childItem,childIndex)=>{
                    let childKey = (childItem.key || (index+ '-' +childIndex)) + '';
                    return (<Menu.Item key={childKey}><Link to={childItem.url}><span>{childItem.label}</span></Link></Menu.Item>)
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
                defaultSelectedKeys={defaultSelectedKeys}
                defaultOpenKeys={defaultOpenKeys}
                mode="inline"
                >
                    {subMenu}
                </Menu>
            </Sider>
        );
    }
}