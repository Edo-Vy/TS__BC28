import React from "react";
import ReactDOM from "react-dom/client";

// setup redux
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import { Routes,  Route, Navigate} from 'react-router-dom'
// setup router-dom --- history
import {createBrowserHistory} from '@remix-run/router';
import {unstable_HistoryRouter as HistoryRouter} from 'react-router-dom';
//====
import HomeTemplates from "./templates/HomeTemplates/HomeTemplates";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import Search from "./pages/Search/Search";
import Detail from "./pages/Detail/Detail";

//--history
export const history = createBrowserHistory();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route path="" element={<HomeTemplates/>}>
          <Route index element={<Home/>}></Route>
          <Route path="detai">
            <Route path=":id" element={<Detail/>}></Route>
          </Route>
          <Route path="login" element={<Login/>}></Route>
          <Route path="cart" element={<Cart/>}></Route>
          <Route path="profile" element={<Profile/>}></Route>
          <Route path="register" element={<Register/>}></Route>
          <Route path="search" element={<Search/>}></Route>
          <Route path="*" element={<Navigate to = ''/>}></Route>

        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);
