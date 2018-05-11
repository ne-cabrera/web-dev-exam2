import React, { Component } from "react";

export default class RouteElement extends Component {

	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
    
	handleClick(){
		this.props.onClick(this.props.title);
	}

	render() {
		return (
			<li className="list-group-item" onClick={this.handleClick}>
				{this.props.title}
			</li>
		);
	}
}
