import './index.less';
import React from "react";
import { connect } from 'react-redux';
import { Layout, Icon, message } from 'antd';
import GlobalFooter from '../components/GlobalFooter';
import GlobalSider from '../components/GlobalSider';
import GlobalHeader from '../components/GlobalHeader';
import GlobalBreadcrumb from '../components/GlobalBreadcrumb';
import {renderRoutes, matchRoutes} from 'react-router-config';
import { toggleSubmen } from '@/store/common/action';
import navData from '../navData.config';

const { Content } = Layout;

const mapStateToProps = (state) => {
    return {
        collapsed: state.commonStore.collapsed
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        toggleSubmen: (...args) => dispatch(toggleSubmen(...args))
    }
}

class LayoutPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // 侧边栏导航数据
            siderData : navData.map((item,i)=>{
                return {
                    label: item.label || ("页面" + i),
                    key: item.key || i,
                    url: item.url || '',
                    icon: item.icon || 'appstore-o',
                    children: item.children ? item.children.map((itemChild,childIndex)=>{
                        return {
                            label: itemChild.label || ("页面" + "i" + "-" + childIndex),
                            key: itemChild.key || i,
                            url: itemChild.url || '',
                            icon: itemChild.icon || '',
                        }
                    }) : []
                }
            }),
            defaultSelectedKeys: [],    //默认展开菜单
            navData: [],                //导航栏
        }


    }
    // 导航缩小放大
    handleMenuCollapse = (collapsed)=>{
        this.props.toggleSubmen(collapsed);
    }

    // 获取当前的导航数据
    getPageNavData = (routes, pathname) => {
        const branch = matchRoutes(routes, pathname);
        const key = branch[0].route.key;
        let navData = [];
        let defaultOpenKeys = [];

        this.state.siderData.findIndex(item => {
            if(item.key == "home"){         // 默认添加首页
                item.icon = "home";
                navData.push(item);
            }
            if(key == "home"){
                defaultOpenKeys.push(key);
                return true;
            }else if(item.key == key){
                navData.push(item);
                defaultOpenKeys.push(item.key);
                return true;
            }else if(item.children && item.children.length){   //查询子导航数据
                return item.children.findIndex(child => {
                    if(child.key == key){
                        defaultOpenKeys.push(item.key);
                        navData.push(item);
                        navData.push(child);
                        return true; 
                    }
                    return false;
                }) > -1;
            }else{
                return false;
            }
        })

        this.setState({
            defaultSelectedKeys: [key],
            navData: navData,
            defaultOpenKeys: defaultOpenKeys,
        })
    }

    componentWillMount(){
        const {location, route} = this.props;
        this.getPageNavData(route.routes,location.pathname);
    }
    componentWillReceiveProps(nextProps){
        const {location, route} = this.props;
        if (nextProps.location.pathname != location.pathname) {
            this.getPageNavData(route.routes ,nextProps.location.pathname);
        } 
    }

    render(){
        const { collapsed} = this.props;
        const {siderData, defaultSelectedKeys, defaultOpenKeys, navData} = this.state;
        return(
            <Layout>
                <GlobalSider 
                    collapsed={collapsed} 
                    siderData={siderData}
                    defaultSelectedKeys= {defaultSelectedKeys}
                    defaultOpenKeys={defaultOpenKeys}
                />
                <Layout>
                    <GlobalHeader collapsed={collapsed} onCollapse={this.handleMenuCollapse}/>
                    <Content>
                    <div className="page-breadcrumb">
                        <GlobalBreadcrumb pageNavData={navData}/>
                    </div>
                    <div className="page-content">
                        {renderRoutes(this.props.route.routes)}
                    </div>
                    </Content>
                    <GlobalFooter/>
                </Layout>
            </Layout>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LayoutPage)
