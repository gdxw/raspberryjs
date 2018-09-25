/**
 * 公共头部
 */
import React, { Component } from 'react';
import { Layout, Menu, Icon, Badge, Dropdown, Avatar } from 'antd';
import avatarImg from "../GlobalSider/logo-min.png"
import './index.less'
// import { Link } from 'dva/router';
// import NoticeIcon from '../NoticeIcon';
// import HeaderSearch from '../HeaderSearch';

const { Header } = Layout;

export default class GlobalHeader extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentUser: {
                avatar: avatarImg,
                name: "dxw"
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
                    <Badge className="head-message" count={1}>
                        <Icon style={{fontSize:'20px'}} type="message" theme="outlined" />
                    </Badge>
                    <Dropdown overlay={menu}>
                        <span className="action account">
                            <Avatar icon="user">
                                {currentUser.name.charAt(0)}
                            </Avatar>
                        </span>
                    </Dropdown>
                </div>
            </Header>
        )
    }
}