/**
 * 按需加载
 * 参考链接：https://blog.seosiwei.com/detail/10
 */

import { Component } from "react";
export default function asyncComponent(importComponent){
    class AsyncComponent extends Component{
        constructor(props){
            super(props);
            this.state = {
                component: null
            }
        }

        async componentDidMount(){
            const { default: component } = await importComponent();
            this.setState = ({
                component
            })
        }

        render(){
            const C = this.state.component;
            return C ? <C {...this.props}></C> : null
        }
    }
    return AsyncComponent;
}