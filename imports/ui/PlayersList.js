import React       from 'react';
import PlayerItem from './PlayerItem';

export default class PlayersList extends React.Component{

  renderPlayers(){

    if(this.props.players.length === 0){
      return(
        <div className='item'>
          <p className='item__message'> Add a player to get started!</p>
        </div>
      );
    } else {
      return this.props.players.map((player)=>{
        return (
          <PlayerItem key={player._id} player={player}/>
        );
    });//end of map
  }
 };//end of renderPlayers

  render(){

    return(
      <div>
        {this.renderPlayers()}
      </div>
    );
  };//end of render
}; //end of PlayersList
