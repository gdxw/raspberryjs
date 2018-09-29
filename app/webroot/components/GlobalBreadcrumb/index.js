/**
 * 面包屑路径导航
 */

import React, { PureComponent } from 'react';
import { Breadcrumb, Icon } from 'antd';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

class GlobalBreadcrumb extends PureComponent{
    constructor(props){
        super(props);
    }
    
    render(){
        const { pageNavData } = this.props;
        const IconLink = (item,index)=>{
            if(index+1 == pageNavData.length || !item.url){
                if(!index){
                    return (<span><Icon type={item.icon}/> {item.label}</span>)
                }else{
                    return item.label;
                }
            }else{
                if(!index){
                    return (
                        <Link to={item.url}>
                            <Icon type={item.icon}/>{item.label}
                        </Link> 
                    )
                }else{
                    return (
                        <Link to={item.url}>{item.label}</Link>
                    )
                }
            }
        }
        return (<Breadcrumb separator="/">
                {
                    pageNavData.map((item, index)=>{
                        if(item.key && item.label){
                            return(
                                <Breadcrumb.Item key={item.key}>
                                    {IconLink(item,index)}
                                </Breadcrumb.Item>
                            ) 
                        }
                        return "";
                    })
                }
       </Breadcrumb>)
    }
}
GlobalBreadcrumb.propTypes = {
    pageNavData: PropTypes.array
};

export default GlobalBreadcrumb;