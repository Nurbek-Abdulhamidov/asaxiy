import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../layout/navbar";
import nav_data from "../mock/navbar";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          {nav_data.map(({ path, element, id }) => {
            return <Route key={id} path={path} element={element} />;
          })}
        </Route>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
