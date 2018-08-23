'use strict';

module.exports = appInfo => {
  const config = {};

  config.keys = 'keys';

  /**
   * some description
   * @member Config#test
   * @property {String} key - some description
   */
  config.test = {
    key: appInfo.name + '_123456',
  };

  config.view = {
    defaultViewEngine: 'nunjucks',
  };

  config.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };
  
  config.middleware = [
    'robot'
  ];
  

  return config;
};