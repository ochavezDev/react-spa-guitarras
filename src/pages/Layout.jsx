import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-amber-50 text-stone-800 min-h-screen">
      <Header />
      <main className="pt-20">
       <Outlet/>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
