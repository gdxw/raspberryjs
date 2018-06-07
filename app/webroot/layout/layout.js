import './index.less';
import React from "react";
import { Layout, Icon, message } from 'antd';
import GlobalFooter from '../components/GlobalFooter';
import GlobalSider from '../components/GlobalSider';
import GlobalHeader from '../components/GlobalHeader';
import GlobalBreadcrumb from '../components/GlobalBreadcrumb';
import {renderRoutes} from 'react-router-config';
const { Content } = Layout;

export default class LayoutPage extends React.Component{
  render(){
    const siderData = this.props.route.routes.map((item,i)=>{
      return {
        label: item.label || ("页面" + i),
        key: item.key || i,
        url: item.path || '/',
        icon: item.icon || 'appstore-o'
      }
    });
    return(
      <Layout>
        <GlobalSider siderData={siderData}/>
        <Layout>
          <GlobalHeader/>
          <Content>
          <div className="page-breadcrumb">
              <GlobalBreadcrumb/>
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
