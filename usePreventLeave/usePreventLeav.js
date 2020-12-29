import React from "react";
import ReactDOM from "react-dom";

const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };

  const enableprevent = () => window.addEventListener("beforeunload", listener);
  const disableprevent = () =>
    window.removeEventListener("beforeunload", listener);
  return { enableprevent, disableprevent };
};

const App = () => {
  const { enableprevent, disableprevent } = usePreventLeave();
  return (
    <div className="App">
      <button onClick={enableprevent}>Protect</button>
      <button onClick={disableprevent}>Unprotect</button>
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
