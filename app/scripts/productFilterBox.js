'use strict';

let ProductFilterBox = React.createClass({
  render() {
    return (
      <div className="productFilterBox">
        <SearchBar />
        <ProductListBox />
      </div>
    );
  }
});

let SearchBar = React.createClass({
  render() {
    return (
      <div className="searchBar">
        <input type="text" placeholder="search..." />
        <p>
          <input type="checkbox" />
          <span>Only show products in stock</span>
        </p>
      </div>
    );
  }
});

let ProductListBox = React.createClass({
  render() {
    return (
      <div className="productList">
        <ProductHeader />
        <ProductCategory />
        <ProductItem />
        <ProductItem />
        <ProductCategory />
        <ProductItem />
        <ProductItem />
      </div>
    );
  }
});

let ProductHeader = React.createClass({
  render() {
    return(
      <p><span>Name</span>&nbsp;<span>Price</span></p>
    );
  }
});

let ProductCategory = React.createClass({
  render() {
    return (
      <div className="productCategory">
        This is productCategory
      </div>
    );
  }
});

let ProductItem = React.createClass({
  render() {
    return (
      <div className="productItem">
        This is productItem
      </div>
    );
  }
});

ReactDOM.render(<ProductFilterBox />, document.getElementById('app'));
