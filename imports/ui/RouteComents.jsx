import React, { Component } from "react";
import CommentsList from "./CommentsList";
import Stars from "./Stars";
import Rate from "./Rate";

export default class RouteComments extends Component {

	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.addRating = this.addRating.bind(this);
	}

	handleChange(e) {
		const name = e.target.value;
		if(e.which === 13)
		{
			this.props.onKeyPress(name, this.props.title);
		}
	}

	addRating(n){
		Meteor.call("comments.addRating", this.props.title, n);
	}

	render() {
		console.log(this.props);
		return (
			<div className="card">
				<h5 className="card-header">{this.props.title}     </h5>
				{this.props.comments !== undefined ?<div><p>Rating: </p><Rate rating={this.props.comments.rating}/> </div>: <div></div>}
				<div className="card-body">
					<h5 className="card-title">Comments:</h5>
					<Stars onClick={this.addRating}/>
					<input type="text" placeholder="Add a comment" onKeyPress={this.handleChange}/>
					{this.props.comments !== undefined ? <CommentsList comments={this.props.comments}/> : <div></div>}
				</div>
			</div>
		);
	}
}
