import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import logo from "./assets/download.jpg";

// const heading = React.createElement(
//   "h1",
//   {
//     id: "parent",
//     xyz: "abc",
//   },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "h1 tag"),
//     React.createElement("h2", {}, "h2 tag"),
//   ])
// );

// console.log(heading); //object

// JSX (transpiled before it reaches the JS) - Parcel - Babel
//JSX syntax HTML-like or XML like syntax
// JSX =>Bebel transpiles => React.createElement => ReactElement-JS Object => HTMLElement(render)
// const jsxHeading = <h1 id="heading">Hello inside jsx</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// root.render(jsxHeading);

// const heading = React.createElement(
//   "h1",
//   {
//     id:"title",
//     className:"heading",
//     style:{color:"red"}
//   },
//   "Namaste React!!!"
// )

// setTimeout(
//   function(){
//     const heading3 = document.getElementById('title');
//     console.log(heading3)
//     heading3.innerHTML = 'Namaste JS'
//   }
//   , 2000)

// root.render(heading)

// --------------------------------------------------------------
// - class based Components - OLD

// const h1 = React.createElement("h1", { key: "2", id: "key" }, "Heading 1");

// const h2 = React.createElement("h2", { key: "3", id: "key" }, "Heading 2");

// const container = React.createElement("div", { id: "container" }, [
//   heading,
//   heading2,
//   h1,
//   h2,
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// -------------------------------------------------------------//

//React Component
// 1. Class Based components - Old way - JS classes
// 2. Functional Component - New way - JS functions

//Functional component - js fn which returns some jsx elements
// const HeadingComponent = () => {
//   return <h1 className="heading">Functional Comp</h1>;
// };

// Its called a s Component composition (comp inside another)
const Title = () => <h2>Im coming from title component</h2>;

const num = 1000;
const HeadingComponent = () => (
  <div>
    Hello
    {Title()}
    <Title />
    <h1 className="heading">Functional Comp</h1>
  </div>
);
//{} - jsx sanitize the code written in it.
//Element will be rendered - roor.render(jsxHeading);
// Functional component will render - root.render(<HeadingComponent />)

// ---------------- Assignmnet ------------------------
const HeaderAssignment = () => (
  <div className="container">
    <div className="logo p-10">
      <img
        className="logo-img"
        src={logo}
        alt=""
      />
    </div>
    <div className="search-bar p-10">
      <label className="p-10">Search</label>
      <input
        className="search-input"
        type="text"
      />
    </div>
    <div className="user-icon p-10">user icon</div>
  </div>
);
root.render(<HeaderAssignment />);
// root.render(<HeadingComponent />);
