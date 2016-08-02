import React from 'react';

class ProductCategory extends React.Component {
  render() {
    return (
      <div className="productCategory">
        {this.props.category}
      </div>
    );
  }
}

export default ProductCategory;
