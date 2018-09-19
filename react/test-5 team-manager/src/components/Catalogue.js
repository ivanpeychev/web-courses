import React, { Component } from 'react';
import {BrowserRouter, Link} from 'react-router-dom';

export default class Catalogue extends Component {
	render() {
		return(
			<main>
				<h2>Catalogue</h2>
				<div>{this.props.match.params.category}</div>
			</main>
		)
	}
}