import React, { Component } from "react";
import ProductProfile from "./ProductProfile";
import img from "../../images/img1.jpg";

const products = [
  {
    name: "Product 1",
    description: "Description 1",
    price: 100,
    image: img,
    available: true,
  },
  {
    name: "Product 2",
    description: "Description 2",
    price: 200,
    image: img,
    available: false,
  },
  {
    name: "Product 3",
    description: "Description 3",
    price: 300,
    image: img,
    available: true,
  },
];

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: products,
    };
  }

  render() {
    return this.state.products.map((product) => {
      return (
        <ProductProfile
          name={product.name}
          description={product.description}
          image={product.image}
          price={product.price}
          available={product.available}
        />
      );
    });
  }
}

export default ProductList;
