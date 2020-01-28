import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
// get our fontawesome imports
// import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
// import Footer from './Footer';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelopeSquare, faKey } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faEnvelopeSquare, faKey);

class Contact extends Component {
  handleClick = e => {
    e.preventDefault();
    console.log("The link was clicked.");
    window.location.assign("https://github.com/jgilbertworks");
  };

  handleClickTwo = e => {
    e.preventDefault();
    console.log("clicked");
    window.location.assign(
      "https://www.linkedin.com/in/jeremy-gilbert-41323329/"
    );
  };
  render() {
    return (
      <div>
        <Header />
        <div className="contact-wrapper">
          <div className="contact-container">
            <h1 className="contact-header">contact me</h1>
            <div className="icon">
              <FontAwesomeIcon
                cursor={"pointer"}
                onClick={this.handleClickTwo}
                icon={["fab", "linkedin"]}
                size="10x"
              />
            </div>
            <div className="icon">
              <FontAwesomeIcon
                cursor={"pointer"}
                onClick={this.handleClick}
                icon={["fab", "github-square"]}
                size="10x"
              />
            </div>
            <h1 className='contact-header'>jgilberworks@gmail.com</h1>
          <h1 className='contact-header'>(510) 681-3855</h1>
          </div>
        </div>
        <Footer />
        <style jsx>{`
          .contact-wrapper {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
            height: 100vh;
            align-items: center;
            text-align: center;
            // font-size: 1.5vw;
          }
          .contact-container {
            padding: 30px;
            align-items: center;
          }
          .contact-header {
            color: black;
            font-size: 36px;
            font-family: "Arial";
          }
          .icon {
            display: inline-block;
            justify-self: center;
            align-self: center;
            text-align: center;
            margin: 1rem;
          }
        `}</style>
      </div>
    );
  }
}
export default Contact;
