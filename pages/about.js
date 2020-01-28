import React, { Component } from "react";
import Header from "./components/Header";
import RecentSkills from './components/RecentSkills';
import Chart from './components/Chart';
import Footer from "./components/Footer";
// import { Animated } from "react-animated-css";
// get our fontawesome imports
// import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fab);

class About extends Component {

    handleClick = (e) => {
        e.preventDefault();
        console.log('The link was clicked.');
        window.location.assign('https://github.com/jgilbertworks');
      };
    
      handleClickTwo = (e) => {
        e.preventDefault();
        console.log('clicked');
        window.location.assign('https://www.linkedin.com/in/jeremy-gilbert-41323329/');
      };

  render() {
    return (
      <div>
        <Header />

        <div className="about-wrapper">
          <div className="about-container">
            <div className="text-container">
              <div className="about-me">
                <h1 className="title">about me</h1>
              </div>
              <div className="about-header">
                <p>
                  I'm a full stack web developer based in Oakland, California.
                </p>
                <div className="about-body">
                  <p className='intro-text'>
                    Entry-level Full Stack Web Developer with 3+ years
                    professional experience in database administration, seeking
                    to bring meaningful insights to data through visually
                    striking web application development. I have a B.A. in Liberal
                    Arts and Certificate of Completion in Full Stack web
                    development from the University of California, Berkeley.
                    Tenacious, detail-oriented, organized, positive attitude and
                    motivated to succeed, with the passion and eagerness to
                    excel and support a company's growth and success.
                  </p>
                </div>
              </div>

              <div className="icon-wrapper">
                <FontAwesomeIcon onClick={this.handleClickTwo}
                  className="icon"
                  cursor={"pointer"}
                  icon={["fab", "linkedin"]}
                  size="5x"
                />

                <FontAwesomeIcon onClick={this.handleClick}
                  className="icon"
                  cursor={"pointer"}
                  icon={["fab", "github-square"]}
                  size="5x"
                />
              </div>
            </div>

            <div className="profile-photo-wrapper">
              <img className="profile-photo" src="/me_2.png" alt="my image" />
            </div>
          </div>
        </div>
        <RecentSkills/>
        <Chart/>
        <Footer />
        <style jsx>{`
          .about-wrapper {
            display: grid;
            margin: 2rem;
          }
          .about-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-content: end;
          }
          h1,
          p {
            font-family: "Arial";
          }
          h1 {
            color: black;
          }
          .text-container {
            display: grid;
            grid-template-columns: 1fr;
            border-bottom: 1px solid grey;
          }
          .about-me {
            font-size: 50px;
          }
          .about-header {
            font-size: 24px;
            font-weight: 800;
          }
          .about-body {
            font-size: 18px;
            font-weight: 400;
          }
          .icon-wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
          .profile-photo-wrapper {
            display: grid;
            border-bottom: 1px solid grey;
          }
          .profile-photo {
            max-width: 600px;
            height: auto;
            background-size: cover;
            align-self: end;
          }

          //media-queries

          @media (max-width: 2560px) {
            .about-container {
            }
          }

          @media (max-width: 1440px) {
            .about-container {
            }
            .title {
              display: grid;
              grid-column: 1/3;
            }
            .about-me {
              font-size: 40px;
            }
          }

          @media (max-width: 1024px) {
            .about-container {
              grid-template-columns: 1fr;
            }
            .profile-photo-wrapper {
              padding: 30px 0px 0px 0px;
            }
            .profile-photo {
              height: 300px;
              margin: 0 auto;
            }
            .about-me {
              font-size: 36px;
            }
            .text-container {
              border: none;
              margin: 1rem;
            }

            @media (max-width: 768px) {
              .about-container {
                grid-template-columns: 1fr;
              }
              .about-me {
                font-size: 36px;
              }
            }
          }

          @media (max-width: 425px) {
            .about-wrapper {
              grid-template-colums: 1fr;
              margin: .05rem;
            }
            .about-container {
              display: grid;
              grid-template-colums: 1fr;
              margin: .05rem;
              text-align: center;
            }
            .about-me {
              font-size: 24px;
            }
            // .intro-text {
            //   text-align: left;
            // }
            .profile-photo {
              width: 300px;
              height: auto;
            }
            .icon-wrapper {
              justify-items: center;
            }

            @media (max-width: 320px) {
              // .about-wrapper {
              //   grid-template-colums: 1fr;
              //   margin: .05rem;
              // }
              // .about-container {
              //   display: grid;
              //   grid-template-colums: 1fr;
              //   margin: .05rem;
              // }
              // .about-me {
              //   font-size: 24px;
              // }
              // .profile-photo {
              //   width: 300px;
              // }
              // .skill-photo {

              // }
          }
        `}</style>
      </div>
    );
  }
}

export default About;
