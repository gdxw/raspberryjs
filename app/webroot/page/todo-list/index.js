import React,{Component} from 'react';
import { List, Avatar, Button, Icon } from 'antd';
import ajax from '../../common/ajax';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            initLoading: true,
            loading: false,
            todoList: [],
        }
    }
    componentDidMount(){
        ajax.get('/api/todo-list/list').then(res=>{
            this.setState({
                initLoading: false,
                todoList: res.todoList,
            })
        }).catch(error=>{
            this.setState({
                initLoading: false
            })
        })
    }

    render(){
        const { initLoading, loading, todoList } = this.state;
        const loadMore = !initLoading && !loading ? (
            <div style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}>
                <Button onClick={this.onLoadMore}>loading more</Button>
            </div>
        ) : null;

        const IconText = ({ type, text }) => (
            <span>
                <Icon type={type} style={{ marginRight: 8 }} />
                {text}
            </span>
        );

        const listItem = item => (
            <List.Item
                key={item.title}
                actions={[
                    <IconText type="star-o" text="156" />, 
                    <IconText type="like-o" text="156" />, 
                    <IconText type="message" text="2" />
                ]}
                extra={<img width={272} 
                alt="logo" 
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
            >
                <List.Item.Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description = {item.description}
                />
            </List.Item>
        )

        return (
            <List
                className="demo-loadmore-list"
                loading={initLoading}
                itemLayout="vertical"
                size="large"
                dataSource={todoList}
                renderItem={listItem}
                footer={<div><b>ant design</b> footer part</div>}
          />
        )
    }
}

export default Home;