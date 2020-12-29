import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";


const UserIntput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onchange = (event) => {
    const {
      target: { value }
    } = event;
    let willupdate = true;
    if (typeof validator === "function") {
      willupdate = validator(value);
    }
    if (willupdate) {
      setValue(value);
    }
  };
  return { value, onchange };
};

const App = () => {
  const maxlenght = (value) => !value.includes("@");
  // const maxlenght = (value) => value.length <= 10;
  const name = UserIntput("Mr. ", maxlenght);

  return (
    <div className="App">
      <h1>Hello Hamza</h1>
      <input placeholder="name" value={name.value} onChange={name.onchange} />
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
