import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { HTTP } from "meteor/http";

export const Buses = new Mongo.Collection("buses");

Meteor.methods({
	"buses.getBuses"(){
		var buses = HTTP.call("GET", "http://webservices.nextbus.com/service/publicJSONFeed?command=vehicleLocations&a=sf-muni&t=0");
		var res = JSON.parse(buses.content);
		return res;
	}
});