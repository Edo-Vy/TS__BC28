import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

// setup redux
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import {
  Routes,
  Route,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
// setup router-dom --- history
import { createBrowserHistory } from "@remix-run/router";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
//====
import HomeTemplates from "./templates/HomeTemplates/HomeTemplates";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import Search from "./pages/Search/Search";
import { http } from "./util/setting";
import Loading from "./components/Loading/Loading";
// import Detail from "./pages/Detail/Detail";

// Lazyload
const Detail: React.FC = lazy(() => import("./pages/Detail/Detail"));

//--history
export const history = createBrowserHistory();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// react v6.4
const routeReact = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<HomeTemplates />}>
      <Route index element={<Home />}></Route>
      <Route path="detail">
        <Route
          path=":id"
          loader={async ({ request, params }) => {
            let id = params.id;
            let rerult = await http.get(`/Product/getbyid?id=${id}`);

            return rerult.data.content;
          }}
          element={
            <Suspense fallback={<Loading/>}>
              {/* khi component Detail load chưa xong thì load -> Loading lên. Khi nào component 
              Detail load xong rồi thì -> load Detail lên */}
              <Detail />
            </Suspense>
          }
        ></Route>
      </Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="cart" element={<Cart />}></Route>
      <Route path="profile" element={<Profile />}></Route>
      <Route path="register" element={<Register />}></Route>
      <Route path="search" element={<Search />}></Route>
      <Route path="*" element={<Navigate to="" />}></Route>
    </Route>
  )
);
root.render(
  <Provider store={store}>
    <RouterProvider router={routeReact} />
  </Provider>

  // <Provider store={store}>
  //   <HistoryRouter history={history}>
  //     <Routes>
  //       <Route path="" element={<HomeTemplates />}>
  //         <Route index element={<Home />}></Route>
  //         <Route path="detail">
  //           <Route
  //             path=":id"
  //             element={
  //               <Suspense fallback={<div>Loading...</div>}>
  //                 {/* khi component Detail load chưa xong thì load -> Loading lên. Khi nào component
  //                 Detail load xong rồi thì -> load Detail lên */}
  //                 <Detail />
  //               </Suspense>
  //             }
  //           ></Route>
  //         </Route>
  //         <Route path="login" element={<Login />}></Route>
  //         <Route path="cart" element={<Cart />}></Route>
  //         <Route path="profile" element={<Profile />}></Route>
  //         <Route path="register" element={<Register />}></Route>
  //         <Route path="search" element={<Search />}></Route>
  //         <Route path="*" element={<Navigate to="" />}></Route>
  //       </Route>
  //     </Routes>
  //   </HistoryRouter>
  // </Provider>
);
