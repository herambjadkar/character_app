import React from 'react';

class SearchComponent extends React.Component  {
  state = {
    searchQuery:''
  }
  inputUpdated = (e) => {
    this.setState({searchQuery: e.target.value});
  }
  onSearch = (e) => {
    e.preventDefault();
    this.props.search(this.state.searchQuery);
  }
  render(){
    return (<form onSubmit={this.onSearch}>
      <div className="form-group">
        <label>Search by Name</label>
        <div className="row">
          <div className="col-8">
            <input type="text" name="searchInput" value={this.searchQuery} onChange={this.inputUpdated} className="form-control"/>
          </div>
          <div className="col-4 pl-0">
            <button type="submit" className="btn btn-primary ">Submit</button>
          </div>
        </div>
      </div>
    </form>)
  }
}

export default SearchComponent;
