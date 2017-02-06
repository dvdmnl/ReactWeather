import React from 'react';
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router'
import Main from '../components/Main.js'
import Weather from '../components/Weather.jsx';
import About from '../components/About.jsx';
import Examples from '../components/Examples.jsx'


const routes = (
    <Route path="/" component={Main}>
        <IndexRoute component={Weather} />
        <Route path="/about" component={About}/>
        <Route path="/examples" component={Examples}/>
    </Route>
)

export default routes;
