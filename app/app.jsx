import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router'
import routes from './Routes/Routes'

ReactDOM.render((
    <Router history={browserHistory} routes={routes}/>
), document.getElementById("app") );