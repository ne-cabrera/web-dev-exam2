import React, { Component } from "react";
import {Meteor} from "meteor/meteor";
import * as d3 from "d3";

export default class App extends Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){
		Meteor.call("buses.getBuses", (err, res) =>{
			if(err) throw err;
      var nestedBuses = d3.nest().key((d) => d.routeTag).entries(res);
      console.log(nestedBuses);
		} );
	}

	render() {
		return (
			<div>
				<h1>Hola!</h1>
			</div>
		);
	}
}
