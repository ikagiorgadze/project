import React, { Component, useRef } from "react";
import ProductProfile from "./ProductProfile";
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import img4 from "../../images/img4.jpg";
import img5 from "../../images/img5.jpg";

const products = [
  {
    key: 1,
    name: "Event 1",
    description: "Event 1",
    price: 100,
    image: img1,
    available: true,
  },
  {
    key: 2,
    name: "Event 2",
    description: "Event 2",
    price: 200,
    image: img2,
    available: false,
  },
  {
    key: 3,
    name: "Event 3",
    description: "Event 3",
    price: 300,
    image: img3,
    available: true,
  },
  {
    key: 4,
    name: "Event 4",
    description: "Event 4",
    price: 300,
    image: img4,
    available: true,
  },
  {
    key: 5,
    name: "Event 5",
    description: "",
    price: 300,
    image: img5,
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
          key={product.key}
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
