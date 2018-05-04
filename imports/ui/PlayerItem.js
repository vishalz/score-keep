import React       from 'react';
import { Players } from './../api/Players';

export default class PlayerItem extends React.Component{

  render(){
    return(
      <div className='item'>
        <p>
          Player {this.props.player.name} has {this.props.player.score} points(s)
        </p>

        <button className='button button--round' onClick={()=>{
          Players.update(this.props.player._id,{$inc : {score: 1}});
        }}>+1</button>

        <button className='button button--round' onClick={()=>{
          Players.update(this.props.player._id,{$inc : {score: -1}});
        }}>-1</button>
      
        <button className='button button--round' onClick={()=>{
          Players.remove(this.props.player._id);
        }}>X</button>

      </div>
    );
  };//end of render
}; //end of PlayerItem.js
