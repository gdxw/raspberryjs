/**
 * 面包屑路径导航
 */

import React, { PureComponent } from 'react';
import { Breadcrumb, Icon } from 'antd';

export default class GlobalBreadcrumb extends PureComponent{
    constructor(props){
        super(props);
    }
    
    render(){
        const { pageData } = this.props;
        return (<Breadcrumb separator="/">
           <Breadcrumb.Item href="">
               <Icon type="home" />首页
           </Breadcrumb.Item>
           <Breadcrumb.Item>
               {pageData.label}
           </Breadcrumb.Item>
       </Breadcrumb>)
    }
}