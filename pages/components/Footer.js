import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer-name">
          <p>Jeremy Gilbert 2020</p>
        </div>
        <style jsx>{`
          .footer-container {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
            height: 100px;
            width: 100%;
            color: whitesmoke;
            text-align: center;
            background: black;
            font-family: "Arial";
            // margin: 1rem;
            // padding: 1rem;
            
          }

          .footer-name {
            align-self: center;
          }

          p {
            font-size: 18px;
          }
        `}</style>
      </div>
    );
  }
}
export default Footer;
