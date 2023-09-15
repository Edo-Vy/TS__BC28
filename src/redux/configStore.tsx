import { configureStore } from '@reduxjs/toolkit'
import productReducer from './reducers/productReducer'
// ...

export const store = configureStore({
  reducer: {
   productReducer :productReducer,
  },
})


// store.getState : là kiểu dữ liệu của state tổng ứng dụng ( bên trong sẽ có nhiều state con )
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {}
export type AppDispatch = typeof store.dispatch