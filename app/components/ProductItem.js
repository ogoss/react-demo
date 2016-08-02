import React from 'react';

class ProductItem extends React.Component {
  render() {
    let name = this.props.product.stocked ? this.props.product.name : <span style={{color: 'red'}}>{this.props.product.name}</span>;
    return (
      <div className="productItem">
        {name}&nbsp;{this.props.product.price}
      </div>
    );
  }
}

export default ProductItem;
