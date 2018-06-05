## bable编译说明

什么是bable 

简单的讲就是一个编译工具，可以把我们写的代码转换成指定代码

例如：es6 转换 es5

**presets**

预设 具体请参考 [babel-presets](https://babeljs.io/docs/plugins/#presets)

本项目中所用预设：
```
env : bable官方提供  可以根据你要支持的环境自动选择相关的插件

reat: reat的语法转换 
默认含有以下插件：
[
    preset-flow
    syntax-jsx
    transform-react-jsx
    transform-react-display-name
]

如果是vue项目需要使用
```


**comments**

是否在编译文件中生成注释  默认：true  