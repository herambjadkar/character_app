import React from 'react';
import Character from './characterComponent';

class CharacterList extends React.Component  {
 
  render(){
    return(<div className="row mt-4 pl-2 pr-2 " > 
    {this.props.characters.map((char,index) => {
      return <div className="col-md-3 col-6 pl-1 pr-1 mb-2" key={index}><Character character={char}></Character></div>
    })}
    </div>
    )
  }
}

export default CharacterList;
