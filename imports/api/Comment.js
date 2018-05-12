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
				title: pTitle,
				rating: 0,
				num: 0
			});
		}
		else{
			var r = Comments.find({title: pTitle}).fetch();
			let arr = r[0].coms;
			arr.push(newComment);
			Comments.update( {title: pTitle}, 
				{
					coms: arr,
					title: pTitle,
					rating: r[0].rating,
					num: r[0].num
				});
		}
	},
	"comments.addRating"(pTitle, pRating){
		if (! this.userId) {
			throw new Meteor.Error("not-authorized");
		}
		var exists = Comments.find({title: pTitle}).fetch();
		if(exists.length === 0){
			let arr = [];
			Comments.insert({
				coms: arr,
				title: pTitle,
				rating: pRating,
				num: 1
			});
		}
		else{
			var r = Comments.find({title: pTitle}).fetch();
			let arr = r[0].coms;
			let n = r[0].num;
			let ra = r[0].rating;
			console.log(n);
			console.log(ra);
			ra *= n;
			ra += pRating;
			n ++;
			ra /= n;
			Comments.update( {title: pTitle}, 
				{
					coms: arr,
					title: pTitle,
					rating: ra,
					num: n
				});
		}
	}
});