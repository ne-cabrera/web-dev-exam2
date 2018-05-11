import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import App from '../imports/ui/App';
import MainContainer from "../imports/ui/MainContainer";
 
Meteor.startup(() => {
  render(<MainContainer />, document.getElementById('render-target'));
});
