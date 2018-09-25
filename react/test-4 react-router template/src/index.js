import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import "typeface-lobster";

import App from './App';
import Home from './components/Home';
import Catalogue from './components/Catalogue';
import About from './components/About';

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
