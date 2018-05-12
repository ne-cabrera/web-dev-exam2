import React, { Component } from "react";

export default class Stars extends Component {

	constructor(props){
		super(props);
		this.st5 = this.st5.bind(this);
		this.st4 = this.st4.bind(this);
		this.st3 = this.st3.bind(this);
		this.st2 = this.st2.bind(this);
		this.st1 = this.st1.bind(this);
	}

	st5(){
		this.props.onClick(5);
	}
	st4(){
		this.props.onClick(4);
	}
	st3(){
		this.props.onClick(3);
	}
	st2(){
		this.props.onClick(2);
	}
	st1(){
		this.props.onClick(1);
	}
	render() {
		return (
			<div className="stars">
				<form action="">
					<input className="star star-5" id="star-5" type="radio" name="star" onClick={this.st5}/>
					<label className="star star-5" htmlFor="star-5"></label>
					<input className="star star-4" id="star-4" type="radio" name="star" onClick={this.st4}/>
					<label className="star star-4" htmlFor="star-4"></label>
					<input className="star star-3" id="star-3" type="radio" name="star" onClick={this.st3}/>
					<label className="star star-3" htmlFor="star-3"></label>
					<input className="star star-2" id="star-2" type="radio" name="star" onClick={this.st2}/>
					<label className="star star-2" htmlFor="star-2"></label>
					<input className="star star-1" id="star-1" type="radio" name="star" onClick={this.st1}/>
					<label className="star star-1" htmlFor="star-1"></label>
				</form>
			</div>
		);
	}
}
