import React, { Component } from "react";
import RouteElement from "./RouteElement";
import {Pagination} from "./pagination/Pagination";

export default class RoutesList extends Component {

	constructor(props){
		super(props);
		this.state = {
			currentPage: 1
		};
		this.previous = this.previous.bind(this);
		this.next = this.next.bind(this);
		this.select = this.select.bind(this);
	}
    
	previous(){
		var curr = this.state.currentPage - 1;
		if(curr >= 1){
			this.setState({
				currentPage: curr
			});
		}
	}
    
	next(){
		var curr = this.state.currentPage + 1;
		var max = Math.ceil(this.props.routes.length / 10);
		if(curr <= max){
			this.setState({
				currentPage: curr
			});
		}
	}
    
	select(num){
		this.setState({
			currentPage: num
		});
	}
    
	renderRoutesList(){
		let i = (this.state.currentPage - 1) * 10;
		let j = this.state.currentPage * 10;
		var arr = [];
		for(i; i< j && i<this.props.routes.length; i++){
			var d = this.props.routes[i];
			arr.push(<RouteElement title={d.title} onClick={this.props.onItemClick} key={i}/>);
		}
		return arr;
	}

	render() {
		return (
			<div>
				<div>
					<ul className="list-group">
						{this.renderRoutesList().map((d) =>
							d
						)}
					</ul>
				</div>
				<div>
					<Pagination items={Math.ceil(this.props.routes.length / 10)} current={this.state.currentPage} previous={this.previous} next={this.next} select={this.select}/>
				</div>
			</div>            
		);
	}
}
