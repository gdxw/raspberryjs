import React, {Component} from "react";
import { Avatar } from 'antd';
import CSSModules from 'react-css-modules';
import style from "./index.css";

class UserInfo extends Component{
    constructor(props){
        super(props);
        console.log(style);
        this.state = {
            currentUser: {
                avatar: "",
                name: "dxw",
                title: "枫林杀",
                group: "交易组"
            }
        }
    }

    render(){
        const { currentUser } = this.state;
        return (
            <div className={`${style.header} clearfix`}>
                <div className={style.avatar}>
                    <Avatar size={100} src={currentUser.avatar} />
                </div>
                <div className="content">
                    <div className="contentTitle">
                    早安，
                    {currentUser.name}
                    ，祝你开心每一天！
                    </div>
                    <div>
                    {currentUser.title} |{currentUser.group}
                    </div>
                </div>
            </div>
        );
    }
}
export default UserInfo;