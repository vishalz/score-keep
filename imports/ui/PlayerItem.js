import React       from 'react';
import { Players } from './../api/Players';

export default class PlayerItem extends React.Component{

  render(){
    return(
      <div className='item'>
        <div className='player'>        
          <div>
            <h3 className='player__name'>{this.props.player.name}</h3>
            <p className='player__stats'>{this.props.player.score} points(s) </p>
          </div>
          <div className='player__actions'>
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
        </div>
      </div>
    );
  };//end of render
}; //end of PlayerItem.js
