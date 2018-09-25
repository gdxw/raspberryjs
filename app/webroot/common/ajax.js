
/**
 * axios全局拦截器
 */

import axios from 'axios';
import { message } from 'antd';

const ajax = axios.create({
    xsrfCookieName: 'xsrf-token',    //防止csrf攻击
    showError: true                  // 是否提示错误信息
});

//请求拦截器
ajax.interceptors.request.use(config =>{
    return config;
}, error => {
    let errorMessage = "请求错误，服务开小差！";
    if(error.config.showError){
        message.error(errorMessage);
    }
    return Promise.reject({
        message: errorMessage,
        success: false
    });
})

//响应拦截器
ajax.interceptors.response.use(response=>{
    let errorMessage = "服务器开小差，请重试！";
    // 成功
    if(response.data.success) {
        return response.data.data;
    }
    // 错误
    if(response.data.code && response.data.code == "403"){
        errorMessage = response.data.message || "请重新登陆！";
    }else{
        errorMessage = response.data.message || errorMessage;
    }

    // 错误信息提示
    if(response.config.showError){
        message.error(errorMessage);
    }

    return Promise.reject({
        message: errorMessage,
        code: response.data.code || "500",
        success: false,
        data: response.data.data
    });   

}, (error) => {
    // 系统错误
    let errorMessage = "系统异常，请稍后重试！";
    if(error.config.showError){
        message.error(errorMessage);
    }
    return Promise.reject({
        message: errorMessage,
        code: error.response.status,
        success: false
    });
});

export default ajax;