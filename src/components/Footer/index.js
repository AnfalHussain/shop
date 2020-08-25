import React, { Component } from "react";

class Footer extends Component {
  render() {
    var style = {
      backgroundColor: "rgb(27 12 52)",
      color: "white",
      textAlign: "center",
      padding: "20px",
      position: "fixed",
      left: "0",
      bottom: "0",
      height: "60px",
      width: "100%",
    };

    var phantom = {
      display: "block",
      padding: "20px",
      height: "60px",
      width: "100%",
    };
    return (
      <div>
        {/* <div style={phantom}> </div>
        <div style={style}>
          Developed and Designed by Anfal Hussain
        </div> */}

        <footer className="mt-5">
          {" "}
          <div className="mt-4" style={style}>
            Developed and Designed by Anfal Hussain
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
