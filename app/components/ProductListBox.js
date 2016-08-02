import React from 'react';
import ProductHeader from './ProductHeader';
import ProductCategory from './ProductCategory';
import ProductItem from './ProductItem';

class ProductListBox extends React.Component {
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
}

export default ProductListBox;
