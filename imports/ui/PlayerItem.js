import React       from 'react';
import { Players } from './../api/Players';

export default class PlayerItem extends React.Component{

  render(){
    return(
      <div>
        <p>
          Player {this.props.player.name} has {this.props.player.score} points(s)

          <button onClick={()=>{
            Players.update(this.props.player._id,{$inc : {score: 1}});
          }}>+1</button>

          <button onClick={()=>{
            Players.update(this.props.player._id,{$inc : {score: -1}});
          }}>-1</button>
        
          <button onClick={()=>{
            Players.remove(this.props.player._id);
          }}>X</button>

        </p>
      </div>
    );
  };//end of render
}; //end of PlayerItem.js
