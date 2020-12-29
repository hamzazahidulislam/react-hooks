import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useClick = (onclick) => {
  if (typeof onclick !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("mouseenter", onclick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("mouseenter", onclick);
      }
    };
  }, []);
  return element;
};

const App = () => {
  const sayHello = () => console.log("say hello");

  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
