import React       from 'react';

export default class TitleBar extends React.Component{

  render(){

    return(
      <div >
        <div >
          <h1>{this.props.title}</h1>
        </div>
      </div>
    );
  };//end of render
}; //end of TitleBar
