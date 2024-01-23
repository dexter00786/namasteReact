import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// passing a react element inside root
root.render(<AppLayout />);

/**
 * Header
//  *  - logo(title)
//  *  - Nav item (navbar)
 *  - cart
 * Body
 *  -SerachBar
 *  - Restraunt list
 *    - restro card
 *      - image
 *      - name
 *      - rating
 *      - cuisines
 * Footer
 *  - links
 *  - copyright
 */
