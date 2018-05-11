import React, { Component } from "react";
import RoutesList from "./RoutesList";
import RouteComents from "./RouteComents";
import { withTracker } from "meteor/react-meteor-data";
import {Comments} from "../api/Comment";
import { Meteor } from "meteor/meteor";
import { Session } from "meteor/session";

class Container extends Component {

	constructor(props){
		super(props);
		this.state = {
			routes: [],
			title: ""
		};
		this.showRoute = this.showRoute.bind(this);
		this.addComment = this.addComment.bind(this);
	}

	showRoute(pTitle){
		this.setState({
			title: pTitle
		});
		Session.set("title", pTitle);
	}

	componentDidMount(){
		Meteor.call("buses.getRoutes", (err, res) => {
			if(err) throw err;
			this.setState({
				routes: res.route
			});
		});
	}

	addComment(comment, title){
		Meteor.call("comments.addComment", title, comment);
	}

	render() {
		console.log(this.props.comments[0]);
		return (
			<div className="row">
				<div className="col-md-6">
					<RoutesList routes={this.state.routes} onItemClick={this.showRoute}/>
				</div>
				<div className="col-md-6">
					{this.state.title !== "" ? <RouteComents title={this.state.title} onKeyPress={this.addComment} comments={this.props.comments[0]}/> : <div></div>}		
				</div>
			</div>
		);
	}
}
export default withTracker(() => {
	Meteor.subscribe("comments");
	var tit = Session.get("title");
	return {
		comments: Comments.find({title: tit}).fetch(),
		currentUser: Meteor.user()
	};
})(Container);