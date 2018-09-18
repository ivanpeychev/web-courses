import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
//import { createBrowserHistory as history } from 'history';

import App from './App';
import Home from './components/Home';
import Catalogue from './components/Catalogue';
import About from './components/About';
//history={history}
ReactDOM.render(
	<Router>
		<App>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/catalogue' component={Catalogue} />
				<Route path='/catalogue/:category' component={Catalogue} />
				<Route path='/about' component={About} />
				<Redirect to="/" />
			</Switch>
		</App>
	</Router>
	, 
	document.getElementById('root')
);