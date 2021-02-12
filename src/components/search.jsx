import React, { Component } from 'react';

class Search extends Component {
  handleChange = (event) => {
    this.props.searchFunction(event.target.value);
  }

  render() {
    return (
      <input type="text" className="form-search form-control"
      onChange={this.handleChange} />
    );
  }
}


export default Search;
