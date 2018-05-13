import React       from 'react';
import { Players } from './../api/Players';

export default class AddPlayer extends React.Component{

  handleSubmit(e){
    
    e.preventDefault();
    const playerName = this.refs.playerName.value;
    if(playerName){
      Players.insert({
        name: playerName,
        score: 0
      });
    } 
    this.refs.playerName.value = '';
  
  };//end of handleSubmit

  render(){

    return(
      <div className='item'>
        <form className='form' onSubmit={this.handleSubmit.bind(this)}>
          <input className='form__input' ref='playerName' type='text' placeholder='Player Name'></input>
          <button className='button'>Add Player</button>
        </form>
      </div>
    );
  };//end of render
}; //end of AddPlayer
