// const heading = React.createElement(
//   "h1",
//   {
//     id: "heading",
//     xyz: "abc",
//   },
//   "Hello I'm fromm React JS"
// );

const heading = React.createElement(
  "h1",
  {
    id: "parent",
    xyz: "abc",
  },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "h1 tag"),
    React.createElement("h2", {}, "h2 tag"),
  ])
);

console.log(heading); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
