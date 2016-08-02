import React from 'react';
import SearchBar from './SearchBar';
import ProductListBox from './ProductListBox';

// 组件最外层
class ProductFilterBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      isStockOnly: false
    };
  }
  onInputBarChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }
  onCheckBoxChange(isStockOnly) {
    this.setState({
      isStockOnly: isStockOnly
    });
  }
  render() {
    return (
      <div className="productFilterBox">
        <SearchBar filterText={this.state.filterText} isStockOnly={this.state.isStockOnly} onInputBarChange={this.onInputBarChange.bind(this)} onCheckBoxChange={this.onCheckBoxChange.bind(this)} />
        <ProductListBox productArr={this.props.productArr} filterText={this.state.filterText} isStockOnly={this.state.isStockOnly} />
      </div>
    );
  }
}

export default ProductFilterBox;
