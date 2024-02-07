import React from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import Body from "./body/layout";

export default function Page() {
  return (
    <>
      {/* <Navbar /> */}
      <div>
        <Body />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
