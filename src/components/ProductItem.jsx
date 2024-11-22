import React from "react";
import { useDispatch } from "react-redux";
// import { deleteProduct } from "../store/actions/productActions";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteProduct(product.id));
  };

  return (
    <div className="col-md-4">
      <div className="card mb-3">
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">${product.price}</p>
          <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
          <button className="btn btn-danger" onClick={handleDelete}>Delete</button>

        </div>
      </div>
    </div>
  );
};

export default ProductItem;
