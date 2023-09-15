import { configureStore } from '@reduxjs/toolkit'
// ...

export const store = configureStore({
  reducer: {
   
  },
})


// store.getState : là kiểu dữ liệu của state tổng ứng dụng ( bên trong sẽ có nhiều state con )
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {}
export type AppDispatch = typeof store.dispatch