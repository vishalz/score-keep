import React       from 'react';

export default class TitleBar extends React.Component{

  renderSubtitle(){
    if(this.props.subtitle){
      return(
        <div>
          <h2 className='title-bar__subtitle'>
            {this.props.subtitle}
          </h2>
        </div>
      );
    }
  };

  render(){

    return(
      <div className='title-bar'>
        <div className='wrapper' >
          <h1>{this.props.title}</h1>
          {this.renderSubtitle()}
        </div>
      </div>
    );
  };//end of render
}; //end of TitleBar
