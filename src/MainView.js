import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./css/mainView.css";

export default function MainView() {
  return (
    <div className="mainView">
      <Link to="/questionsList">
        <div className="drawQuestion">Lista pytań</div>
      </Link>
      <Link to="/quiz">
        <div className="drawQuestion">Zagrajmy</div>
      </Link>
      <Link to="/editingQuestion">
        <div className="drawQuestion">Edytuj pytania</div>
      </Link>
      <Link to="/addingQuestion">
        <div className="drawQuestion">Dodaj pytanie</div>
      </Link>
    </div>
  );
}
