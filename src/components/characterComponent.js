import React from "react";

class Character extends React.Component {
  render() {
    return (
      <div className="character">
        <div>
          <img
            src={this.props.character.image}
            alt={this.props.character.name}
          />
          <div className="name">
            <h3>{this.props.character.name}</h3>
            <span>ID: {this.props.character.id}</span>
            <span> - {this.props.character.created}</span>
          </div>
        </div>
        <div className="info">
          <span>STATUS</span>
          <span className="value">{this.props.character.status}</span>
        </div>
        <div className="info">
          <span>SPECIES</span>{" "}
          <span className="value">{this.props.character.species}</span>
        </div>
        <div className="info">
          <span>GENDER</span>{" "}
          <span className="value">{this.props.character.gender}</span>
        </div>
        <div className="info">
          <span>ORIGIN</span>{" "}
          <span className="value">{this.props.character.origin.name}</span>
        </div>
        <div className="info">
          <span>LAST LOCATION</span>{" "}
          <span className="value">{this.props.character.location.name}</span>
        </div>
      </div>
    );
  }
}

export default Character;
