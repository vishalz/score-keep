import { Meteor }  from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import React       from 'react';
import ReactDOM    from 'react-dom';
import App         from './../imports/ui/App';
import { Players } from './../imports/api/Players';


Meteor.startup(()=>{

  Tracker.autorun(()=>{

    const title = 'Score Keep App';
    const players = Players.find({}, { sort: {score: -1}}).fetch();
    ReactDOM.render(<App title={title} players={players}/>, document.getElementById('app'));
  
  });//end of autorun

});//end of startup
