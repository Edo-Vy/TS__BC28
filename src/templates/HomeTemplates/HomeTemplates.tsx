// tsrfc
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
type Props = {};


// pages dùng chung
export default function HomeTemplates({}: Props) {
  return (
    <>
    {/*  <Header titele ={'cyber'}/> */}
      <Header/> 

      <div style={{ minHeight: 600 }}>
        <Outlet />
      </div>
      <footer className="bg-dark text-light text-center py-4">Footer</footer>
    </>
  );
}
