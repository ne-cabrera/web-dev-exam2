import React, { Component } from "react";

export default class CommentElement extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-8">
						{this.props.userName}
					</div>
					<div className="col-md-4">
						{this.props.date.getDate() + "/" + this.props.date.getMonth()+1 + "/" + this.props.date.getFullYear() + " " + this.props.date.getHours() + ":" + this.props.date.getMinutes()}
					</div>
				</div>
				<div className="row">
					{this.props.text}
				</div>
			</div>
		);
	}
}
