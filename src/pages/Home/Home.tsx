// tsrfc
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCart from "../../components/Product/ProductCart";
import { RootState, AppDispatch } from "../../redux/configStore";
import { getAllProductApi, Product } from "../../redux/reducers/productReducer";

type Props = {};

export default function Home({}: Props) {
  // RootState : configStore.tsx
  const { arrprod } = useSelector((state: RootState) => state.productReducer);
  // console.log('arrprod',arrprod);
  console.log({ arrprod });
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    // gọi api
    const action = getAllProductApi();
    dispatch(action);
  }, []);

  return (
    <div className="home">
      <h3>Product List</h3>
      <div className="home-item row">
        {arrprod.map((prod : Product, index:number) => {
          return (
            <div className="col-3" key={index}>
              <ProductCart prod={prod} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
