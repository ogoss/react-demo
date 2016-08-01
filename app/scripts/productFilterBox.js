'use strict';

// 组件最外层
let ProductFilterBox = React.createClass({
  getInitialState() {
    return {
      filterText: '',
      isStockOnly: false
    };
  },
  onSearchBarChange(filterText, isStockOnly) {
    this.setState({
      filterText: filterText,
      isStockOnly: isStockOnly
    });
  },
  render() {
    return (
      <div className="productFilterBox">
        <SearchBar filterText={this.state.filterText} isStockOnly={this.state.isStockOnly} onSearchBarChange={this.onSearchBarChange} />
        <ProductListBox productArr={this.props.productArr} filterText={this.state.filterText} isStockOnly={this.state.isStockOnly} />
      </div>
    );
  }
});

// 搜索框
let SearchBar = React.createClass({
  handleSearchBarChange() {
    this.props.onSearchBarChange(
      this.refs.inputBar.value,
      this.refs.checkBar.checked
    );
  },
  render() {
    return (
      <div className="searchBar">
        <input type="text" placeholder="search..." value={this.props.filterText} ref="inputBar" onChange={this.handleSearchBarChange} />
        <p>
          <input type="checkbox" checked={this.props.isStockOnly} ref="checkBar" onChange={this.handleSearchBarChange} />
          <span>Only show products in stock</span>
        </p>
      </div>
    );
  }
});

// 结果框
let ProductListBox = React.createClass({
  render() {
    let rows = [],
        lastCategory = '';
    this.props.productArr.forEach((data) => {
      if (data.name.indexOf(this.props.filterText) === -1 || (!data.stocked && this.props.isStockOnly)) {
        return;
      }
      if (data.category !== lastCategory) {
        rows.push(<ProductCategory category={data.category} key={data.cateId} />)
      }
      rows.push(<ProductItem product={data} key={data.proId} />)
      lastCategory = data.category;
    });
    return (
      <div className="productList">
        <ProductHeader />
        {rows}
      </div>
    );
  }
});

// 标题项
let ProductHeader = React.createClass({
  render() {
    return(
      <p><span>Name</span>&nbsp;<span>Price</span></p>
    );
  }
});

// 产品分类项
let ProductCategory = React.createClass({
  render() {
    return (
      <div className="productCategory">
        {this.props.category}
      </div>
    );
  }
});

// 产品内容项
let ProductItem = React.createClass({
  render() {
    let name = this.props.product.stocked ? this.props.product.name : <span style={{color: 'red'}}>{this.props.product.name}</span>;
    return (
      <div className="productItem">
        {name}&nbsp;{this.props.product.price}
      </div>
    );
  }
});

let productArr = [
  {proId: 0, cateId: 999, category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {proId: 1, cateId: 999, category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {proId: 2, cateId: 999, category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {proId: 3, cateId: 888, category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {proId: 4, cateId: 888, category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {proId: 5, cateId: 888, category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(<ProductFilterBox productArr={productArr}/>, document.getElementById('app'));
