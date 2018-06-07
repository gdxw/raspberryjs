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
        return (<Breadcrumb separator="/">
           <Breadcrumb.Item href="">
               <Icon type="home" />首页
           </Breadcrumb.Item>
           <Breadcrumb.Item href="">
               <Icon type="user" />
               <span>子页面</span>
           </Breadcrumb.Item>
           <Breadcrumb.Item>
               文章名称
           </Breadcrumb.Item>
       </Breadcrumb>)
    }
}