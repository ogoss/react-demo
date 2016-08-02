import React from 'react';
import ProductFilterBox from './ProductFilterBox';

class AppComponent extends React.Component {
  render() {
    return (
      <ProductFilterBox productArr={this.props.productArr} />
    );
  }
}

AppComponent.defaultProps = {
  productArr: [
    {proId: 0, cateId: 999, category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {proId: 1, cateId: 999, category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {proId: 2, cateId: 999, category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {proId: 3, cateId: 888, category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {proId: 4, cateId: 888, category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {proId: 5, cateId: 888, category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
  ]
};

export default AppComponent;
