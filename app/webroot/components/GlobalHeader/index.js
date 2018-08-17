/**
 * 公共头部
 */
import React, { Component } from 'react';
import { Layout, Menu, Icon, Spin, Tag, Dropdown, Avatar, Divider } from 'antd';

import stylesheet from './index.less'
// import { Link } from 'dva/router';
// import NoticeIcon from '../NoticeIcon';
// import HeaderSearch from '../HeaderSearch';

const { Header } = Layout;

export default class GlobalHeader extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentUser: {
                avatar: "https://git.zhubajie.la/uploads/user/avatar/330/dxw.png",
                name: "gdxw"
            }
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle(){
        const { collapsed, onCollapse } = this.props;
        onCollapse(!collapsed);
        this.triggerResizeEvent();
    }

    triggerResizeEvent() { // eslint-disable-line
        const event = document.createEvent('HTMLEvents');
        event.initEvent('resize', true, false);
        window.dispatchEvent(event);
    }
    onMenuClick(){
        
    }
    render(){
        const { currentUser } = this.state;
        const { collapsed } = this.props;
        
        const menu = (
            <Menu className="menu" selectedKeys={[]} onClick={this.onMenuClick}>
                <Menu.Item disabled><Icon type="user" />个人中心</Menu.Item>
                <Menu.Item disabled><Icon type="setting" />设置</Menu.Item>
                <Menu.Divider />
                <Menu.Item key="logout"><Icon type="logout" />退出登录</Menu.Item>
            </Menu>
        );

        return (
            <Header className="header">
                <Icon
                    className="trigger"
                    type={collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}
                />
                <div className="right">
                    <Dropdown overlay={menu}>
                        <span className="action account">
                            <Avatar size="small" className="avatar" src={currentUser.avatar} />
                            <span className="name">{currentUser.name}</span>
                        </span>
                    </Dropdown>
                </div>
            </Header>
        )
    }
}