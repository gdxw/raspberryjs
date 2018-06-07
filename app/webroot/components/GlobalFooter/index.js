/**
 * 公共底部
 */
import React, { PureComponent } from 'react';
import { Layout, Icon } from 'antd';
import { Link } from 'react-router-dom'
import css from './index.less'

const { Footer } = Layout;

export default class GlobalFooter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      links: [{
        key: '项目首页',
        title: '项目首页',
        href: '/',
        blankTarget: true,
      }, {
        key: 'github',
        title: <Icon type="github" />,
        href: '//github.com/gdxw',
        blankTarget: true,
      }, {
        key: '猪八戒',
        title: '猪八戒网',
        href: '//www.zbj.com',
        blankTarget: true,
      }]
    };
  }
  render() {
    return (
      <Footer>
      <div className="globalFooter">
        {
          this.state.links && (
            <div className="links">
              {this.state.links.map(link => (
                <Link
                  key={link.key}
                  target={link.blankTarget ? '_blank' : '_self'}
                  to={link.href}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          )
        }
        <div className="copyright">
          <div>
            Copyright <Icon type="copyright" /> 2018 猪八戒网平台技术前端组出品
          </div>
        </div> 
      </div>
      </Footer>
    );
  }
};
