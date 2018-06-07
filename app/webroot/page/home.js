import React from 'react';
import { renderRoutes } from 'react-router-config'
export default class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
           <div>
                <h2>我是页面-index</h2>
           </div>
        )
    }
}