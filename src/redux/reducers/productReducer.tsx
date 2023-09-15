//rxslice
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { http } from "../../util/setting";
import { AppDispatch } from "../configStore";
// https://app.quicktype.io/

export interface Product {
  id: number;
  name: string;
  alias: string;
  price: number;
  description: string;
  size: string;
  shortDescription: string;
  quantity: number;
  deleted: boolean;
  categories: string;
  relatedProducts: string;
  feature: boolean;
  image: string;
}

export interface ProductState {
  arrprod: Product[];
}
const initialState: ProductState = {
  arrprod: [],
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    // generic
    getProductAction: (state:ProductState, action: PayloadAction<Product[]>) => {
      state.arrprod = action.payload;
    },
  },
});

export const { getProductAction } = productReducer.actions;

export default productReducer.reducer;

//----------- api product

export const getAllProductApi = () => {
  return async (dispatch: AppDispatch) => {
    try {
      let result = await http.get("/Product");
      // Sau khi lấy dữ liệu từ api về => đưa lên redux 
      const action = getProductAction(result.data.content);
      dispatch(action);
    } catch (erro) {
      console.log(erro)
    }
  };
};
