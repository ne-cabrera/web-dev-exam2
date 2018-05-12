import React, { Component } from "react";

export default class Rate extends Component {

	constructor(props){
		super(props);
		this.renderStars = this.renderStars.bind(this);
	}
	renderStars(){
		var stars = Math.ceil(this.props.rating);
		console.log(stars);
		return stars;
	}
	render() {
		return (
			<div>
				{this.renderStars()}
			</div>
		);
	}
}
