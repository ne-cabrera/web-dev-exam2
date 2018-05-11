import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";

export const Comments = new Mongo.Collection("comments");
if (Meteor.isServer) {
	// This code only runs on the server
	Meteor.publish("comments", function commentsPublication() {
		return Comments.find();
	});
}

Meteor.methods({
	"comments.addComment"(pTitle, comment){
		if (! this.userId) {
			throw new Meteor.Error("not-authorized");
		}
		var exists = Comments.find({title: pTitle}).fetch();
		var newComment = {
			text: comment,
			userName: Meteor.user().profile.name,
			date: new Date()
		};
		if(exists.length === 0){
			let arr = [];
			arr.push(newComment);
			Comments.insert({
				coms: arr,
				title: pTitle
			});
		}
		else{
			var r = Comments.find({title: pTitle}).fetch();
			let arr = r[0].coms;
			arr.push(newComment);
			Comments.update( {title: pTitle}, 
				{
					coms: arr,
					title: pTitle
				});
		}
	}
});