import React from 'react';

class SelectedFilter extends React.Component  {
  render(){
    return (<div className="selected-filters">
      <ul>
        {this.props.list.map((item,index) => <li key={index}>{item.filter} <button id={item.filter} name={item.cat} className="btn btn-link p-0" onClick={this.props.updateFilter}>x</button></li>)}
      </ul>
    </div>)
  }
}

export default SelectedFilter;
