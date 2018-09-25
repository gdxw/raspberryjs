import React, { Component } from 'react';
import { Spin } from 'antd';
import './index.less';

export default class PageLoading extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.isLoading) {
            if (this.props.timedOut) {
                return (
                    <div className="page-loading">
                        <Spin tip="加载超时，请重新刷新！" size="large"/> 
                    </div>
                );
            } else if (this.props.pastDelay) {
                return (
                    <div className="page-loading">
                        <Spin tip="努力加载中。。。！" size="large"/> 
                    </div>
                );
            } else {
                return null;
            }
        } else if (this.props.error) {
            return (
                <div className="page-loading"> 
                    <Spin tip="加载错误！" size="large"/> 
                </div>
            );
        } else {
            return null;
        }
    }
}
