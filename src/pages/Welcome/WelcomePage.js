import React from "react";
import logo from "../../logo.svg";
import trinity from "../../trinity.png";
import "./WelcomePage.css";
import { useHistory } from "react-router-dom";

const WelcomePage = () => {
  const history = useHistory();

  return (
    <div className="welcome-container">
      <div>
        <strong className="title">Welcome!</strong>
      </div>
      <img src={logo} className="App-logo" alt="logo" />
      <img src={trinity} className="trinity" alt="trinity" />
      <div className="continue" onClick={() => history.push("/home")}>
        <span>Continue</span>
        <span className="material-icons">arrow_forward_ios</span>
      </div>
    </div>
  );
};

export default WelcomePage;
