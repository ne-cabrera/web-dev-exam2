import React, {Component} from "react";

export class PagIt extends Component{

	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		this.props.sel(this.props.num);
	}

	render(){
		return this.props.current === 0 ? (<li className="page-item" onClick={this.handleClick}><a className="page-link">{this.props.num}</a></li>)
			:(<li className="page-item active" onClick={this.handleClick}><a className="page-link">{this.props.num}</a></li>);
	}
}