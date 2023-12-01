import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("h1", { key: "heading1" }, "Heading 1111x");
const heading2 = React.createElement("h1", { key: "heading2" }, "Heading 2");
const container = React.createElement("div", { id: "container" }, [
  heading,
  heading2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing a react element inside root
root.render(container);
