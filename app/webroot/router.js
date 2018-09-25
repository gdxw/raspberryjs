import  React, {Component} from 'react';
import { HashRouter as Router,Switch} from 'react-router-dom';
// import { BrowserRouter as Router,Switch} from 'react-router-dom';  
import {renderRoutes} from 'react-router-config';
import createBrowserHistory from 'history/createBrowserHistory';
import routes from './router.config';

const history = createBrowserHistory()

export default class Container extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return ( 
      <Router >
        <div> 
          {renderRoutes(routes)}
        </div> 
      </Router >
    )
  }
}
