import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { HTTP } from "meteor/http";

Meteor.methods({
	"buses.getBuses"(){
		var buses = HTTP.call("GET", "http://webservices.nextbus.com/service/publicJSONFeed?command=vehicleLocations&a=sf-muni&t=0");
		var res = JSON.parse(buses.content);
		return res;
	},
	"buses.getRoutes"(){
		var routes = HTTP.call("GET", "http://webservices.nextbus.com/service/publicJSONFeed?command=routeList&a=sf-muni");	
		var res = JSON.parse(routes.content);
		return res;
	}

});