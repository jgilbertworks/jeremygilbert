import React, { Component } from "react";
import Link from "next/link";

class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar-container">
        <div className="header-name">
          <Link href="/index">
            <h1>Jeremy Gilbert</h1>
          </Link>
        </div>
        <ul className="nav-list">
          <Link href="/About">
            <a>about</a>
          </Link>
          <Link href="/Portfolio">
            <a>portfolio</a>
          </Link>
          <Link href="/Contact">
            <a>contact</a>
          </Link>
        </ul>
        <style jsx>{`
          .nav-bar-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr;
            background: black;
            justify-content: center;
            text-align: center;
            height: 100px;
          }

          .header-name {
            align-self: center;
            text-align: left;
          }

          h1 {
            color: white;
            font-family: "Arial";
          }

          h1:hover {
            cursor: pointer;
          }

          .nav-list {
            align-self: center;
          }

          a {
            text-decoration: none;
            font-family: "Arial";
            text-decoration-style: none;
            text-decoration: none;
            display: inline;
            margin: 0px 30px 0px 30px;
            font-size: 24px;
            text-size-adjust: auto;
            list-style-type: none;
            color: white;
            transition: all 0.2s ease-in-out;
          }

          a:hover {
            cursor:pointer;
          }

          //media queries

          @media (max-width: 2560px) {
            .nav-bar-container {
              padding: 0px 100px 0px 100px;
            }
          }

          @media (max-width: 1440px) {
            .nav-bar-container {
              padding: 0px 75px 0px 75px;
            }
          }

          @media (max-width: 1024px) {
            .nav-bar-container {
              padding: 0px 50px 0px 50px;
            }
          }

          @media (max-width: 768px) {
            .nav-bar-container {
              grid-template-columns: 1fr;
              grid-template-rows: 1fr 1fr;
              padding: 0px 25px 0px 25px;
              height: 175px;
            }
            .header-name {
              text-align: center;
            }
          }

          @media (max-width: 425px) {
            .nav-bar-container {
              padding: 1rem;
            }
            .header-name {
              text-align: center;
            }
            .nav-list > a {
              // font-size: 18px;
              margin: 0px 30px 0px 0px;
            }
            @media (max-width: 320px) {
              .nav-bar-container {
                padding: .5rem;
              }
              .header-name {
                text-align: center;
                font-size: 16px;
              }
              .nav-list > a {
                font-size: 18px;
                margin: 0px 30px 0px 0px;
              }
          }
        `}</style>
      </div>
    );
  }
}

export default NavBar;
