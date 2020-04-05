import React from "react";

class FilterComponent extends React.Component {
  render() {
    //console.log(this.props.udpateFilter);
    return (
      <div className="filter-category">
        <h5>{this.props.category}</h5>
        {this.props.items.map((item, index) => (
          <div key={index}>
            <input
              type="checkbox"
              value={item}
              id={item}
              name={this.props.category}
              checked={this.props.filters[item]}
              onChange={this.props.udpateFilter}
            />
            <label>{item}</label>
          </div>
        ))}
      </div>
    );
  }
}

export default FilterComponent;
