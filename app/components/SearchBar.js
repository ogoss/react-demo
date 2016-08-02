import React from 'react';

class SearchBar extends React.Component {
  handleInputBarChange(e) {
    this.props.onInputBarChange(e.target.value);
  }
  handleCheckBoxChange(e) {
    this.props.onCheckBoxChange(e.target.checked);
  }
  render() {
    return (
      <div className="searchBar">
        <input type="text" placeholder="search..." value={this.props.filterText} onChange={e=>this.handleInputBarChange(e)} />
        <p>
          <input type="checkbox" checked={this.props.isStockOnly} onChange={e=>this.handleCheckBoxChange(e)} />
          <span>Only show products in stock</span>
        </p>
      </div>
    );
  }
};

export default SearchBar;
