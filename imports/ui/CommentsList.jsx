import React, { Component } from "react";
import CommentElement from "./CommentElement";

export default class CommentsList extends Component {
	render() {
		console.log(this.props.comments);
		return (
			<div className="container">
				{this.props.comments.coms.map( (d,i) => (
					<CommentElement text={d.text} userName={d.userName} date={d.date} key={i}/>
				) )}
			</div>
		);
	}
}
