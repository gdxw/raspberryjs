import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import createBrowserHistory from 'history/createBrowserHistory';
import routes from './router.config';

const history = createBrowserHistory()

export default class Container extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <Router history={history}>
        <div>
          {renderRoutes(routes)}
        </div>
      </Router>
    )
  }
}
