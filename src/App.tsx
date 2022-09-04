import React from "react";
import Nav from "./nav/Nav";
import "./App.css";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Nav />
      <article role="main" className="App-body">
        <p>
          <span className="App-brand">pzaenger.com</span>
          <br />
          is under construction
        </p>
      </article>
    </div>
  );
};

export default App;
