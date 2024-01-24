// const heading = React.createElement("h1", { id: "heading", title: "First React Programme"}, "Hello World from React!");

const child1 = React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "I'm an h1 tag"), React.createElement("h2", {}, "I'm an h2 tag")]
  );
  const child2 = React.createElement(
    "div",
    { id: "child2" },
    [React.createElement("h1", {}, "I'm an h1 tag"), React.createElement("h2", {}, "I'm an h2 tag")]
  );
const parent = React.createElement("div", { id: "parent" }, [child1, child2]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);