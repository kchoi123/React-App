import React from "react";
import "./style.css";

function Title(props) {
  return (
    <nav class="navbar navbar-light bg-light">
      <h1 className="title">{props.children}</h1>
      <h2 className="text-light col-4 text-center" id="score">
        Score: {props.score} | Top Score: {props.topScore}
      </h2>
      <h6 className="info">Game Information:</h6>
      <p className="details">
        Click on an image but don't click on the same image twice.
      </p>
    </nav>
  );
}

export default Title;
