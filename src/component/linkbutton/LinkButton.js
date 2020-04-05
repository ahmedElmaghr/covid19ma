import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LinkButton.css";
class LinkButton extends Component {
  iconFontSize = 100 + "%";
  render() {
    return (
      <div style={{ fontSize: this.iconFontSize, margin: 0 }}>
        <Link to={process.env.PUBLIC_URL + this.props.redirection}>
          <button
            className={this.props.clicked ? "btn clicked" : "btn"}
            // style={{ backgroundColor: "transparent", border: 0 + "px" }}
            onClick={this.props.onClick}
          >
            <i className={this.props.className} aria-hidden="true"></i>
          </button>
        </Link>
      </div>
    );
  }
}

export default LinkButton;
