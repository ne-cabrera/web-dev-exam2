import React, { Component } from "react";
import CommentsList from "./CommentsList";

export default class RouteComments extends Component {

	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		const name = e.target.value;
		if(e.which === 13)
		{
			this.props.onKeyPress(name, this.props.title);
		}
	}

	render() {
		return (
			<div className="card">
				<h5 className="card-header">{this.props.title}</h5>
				<div className="card-body">
					<h5 className="card-title">Comments:</h5>
					<input type="text" placeholder="Add a comment" onKeyPress={this.handleChange}/>
					{this.props.comments !== undefined ? <CommentsList comments={this.props.comments}/> : <div></div>}
				</div>
			</div>
		);
	}
}
