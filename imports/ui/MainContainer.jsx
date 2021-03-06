import React, { Component } from "react";
import App from "./App";
import Accounts from "./Accounts";
import Container from "./Container";

export default class MainContainer extends Component {
	render() {
		return (
			<div className="container">
				<div className="jumbotron">
					<h1 className="title">
						San Francisco Muni Bus Distances
					</h1>
				</div>
				<div className="row">
					<Accounts/>
				</div>
				<div className="row">
					<App/>
				</div>
				<div className="row">
					<Container/>

				</div>
			</div>
		);
	}
}
