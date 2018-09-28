import './index.less';
import React from "react";
import { connect } from 'react-redux';
import { Layout, Icon, message } from 'antd';
import GlobalFooter from '../components/GlobalFooter';
import GlobalSider from '../components/GlobalSider';
import GlobalHeader from '../components/GlobalHeader';
import GlobalBreadcrumb from '../components/GlobalBreadcrumb';
import {renderRoutes} from 'react-router-config';
import { toggleSubmen } from '@/store/common/action';

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
    // 导航缩小放大
    handleMenuCollapse = (collapsed)=>{
        this.props.toggleSubmen(collapsed);
    }

    render(){
        const { collapsed } = this.props;
        let pageData;
        let routeKey;
        const siderData = this.props.route.routes.map((item,i)=>{
            var isActive = false;
            debugger
            if(this.props.location.pathname == item.path){
                pageData = item;
                routeKey = item.key || i;
            }
            return {
                label: item.label || ("页面" + i),
                key: item.key || i,
                url: item.path || '/',
                isSelected: isActive,
                icon: item.icon || 'appstore-o'
            }
        });
        return(
            <Layout>
                <GlobalSider 
                    collapsed={collapsed} 
                    siderData={siderData}
                    defaultSelectedKeys= {[routeKey]}
                />
                <Layout>
                    <GlobalHeader collapsed={collapsed} onCollapse={this.handleMenuCollapse}/>
                    <Content>
                    <div className="page-breadcrumb">
                        <GlobalBreadcrumb pageData={pageData}/>
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
