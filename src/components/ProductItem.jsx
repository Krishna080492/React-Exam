import React from "react";
import { useDispatch } from "react-redux";
// import { deleteProduct } from "../store/actions/productActions";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="col-md-4">
      <div className="card mb-3">
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">${product.price}</p>
          <img
            src={product.image}
            className="card-img-top"
            alt={product.title}
          />

          <p className="card-text">{product.category}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
