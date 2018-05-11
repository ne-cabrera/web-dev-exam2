import React, {Component} from "react";
import {PagIt} from "./PagIt";

export class Pagination extends Component{

	constructor(props){
		super(props);
		this.prev = this.prev.bind(this);
		this.next = this.next.bind(this);
	}

	prev(){
		this.props.previous();
	}

	next(){
		this.props.next();
	}

	createItems(){
		var arr = [];
		for(let i = 1; i <= this.props.items; i++){
			if( i === this.props.current){
				arr.push(<PagIt num={i} key={i} sel={this.props.select} current={1}/>);
			}
			else{
				arr.push(<PagIt num={i} key={i} sel={this.props.select} current={0}/>);
			}
		}
		return arr;
	}

	render(){
		return(
			<nav aria-label="Page navigation example">
				<ul className="pagination">
					<li className="page-item"><a className="page-link" onClick={this.prev}>Previous</a></li>
					{this.createItems().map( d => d)}
					<li className="page-item"><a className="page-link" onClick={this.next}>Next</a></li>
				</ul>
			</nav>
		);
        
	}
}