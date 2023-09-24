//tsrfc
import React from "react";
import { NavLink } from "react-router-dom";
import productReducer, { Product } from "../../redux/reducers/productReducer";

type Props = {
  prod: Product;
};

export default function ProductCart({ prod }: Props) {
  // let {prod} = props; // bóc tách bên trên component luôn
  return (
    <div className="card m-2">
      <div className="card-header">
        <img src={prod.image} className="w-100" />
      </div>
      <div className="card-body bg-dark text-light" style={{height:180}}>
        <h3 style={{height:55}}>{prod.name.length > 15 ? prod.name.slice(0,15) +'...' : prod.name}</h3>
        <p className="p-1">{prod.price}$</p>
        <div className="card-footer">
          <NavLink to={`/detail/${prod.id}`} className="btn btn-success">Buy Now</NavLink>
        </div>
      </div>
    </div>
  );
}
