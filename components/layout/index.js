import React from "react";
import Header from "./Header";

export default function index({ children }) {
  return (
    <React.Fragment>
      <Header />
      <div className="container">{children}</div>
    </React.Fragment>
  );
}
