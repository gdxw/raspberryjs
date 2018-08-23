// /**
//  * 日志文件
//  */
// "use strict";

// // zbj日志文件格式模块
// const rklogger = require('@zbj/rklogger');
// const path = require('path');

// class Logger {
//     constructor(name, path){
//         this.options = {

//         }
//         this.name = name || 'log-default';
        
//         this.config = config || null
//         super(name, config)
//     }
//     getConf() {
//         var handles = [{
//             name: 'Console',
//             level: 'trace',
//             src: false,
//             //formatter: function(record, extra){
//             //    extra = JSON.stringify(extra) || '';
//             //    return '\x1b['+ getColor(record.levelName) +'m[%levelName%] %timestamp% [%name%] %content% '+ extra + '\x1b[0m \x1b[90m%src.file% %src.line%\x1b[0m';
//             //}
//         }];
//         if (this.options.log_path) {
//             this.options.log_name = this.options.log_name || '/%name%-%levelName%.log';
//             handles.push({
//                 name: 'RotateFile',
//                 level: 'info',
//                 src: false,
//                 path: this.options.log_path + this.options.log_name,
//                 formatter: function(record, extra){
//                     var recordInfo = Object.assign({}, record);
//                     return `${recordInfo.timestamp} [TxId : ${recordInfo.traceInfo.TxId}, SpanId : ${recordInfo.traceInfo.SpanId}][${recordInfo.levelName}] ${recordInfo.content}`
//                 }
//             });
//         }
//         this.logHandelConf =  {
//             handles: handles
//         };
//     }
//     setOptions(opt){
//         this.options = opt;
//         this.getConf()
//     }
// }

// module.exports = Logger;
