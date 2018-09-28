import React from 'react';
import UserInfo from './components/userInfo';
import "./index.css";

export default class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
           <div className="page-home-container">
                <UserInfo></UserInfo>
                <h2>我是页面-index</h2>
           </div>
        )
    }
}