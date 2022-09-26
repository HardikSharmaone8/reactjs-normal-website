import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Home from "./Home";
import Services from "./Services";
import Contact from "./Contact";
import Search from "./Search";
import Menu from "./Menu";

var App = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/service" element={<Services />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/*" element={<Navigate replace to="/" />}></Route>
      </Routes>
    </>
  );
};

export default App;
