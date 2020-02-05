import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton
} from "react-twitter-embed";

class Portfolio extends Component {
  render() {
    return (
      <div>
      <div className='master-wrapper'>
        <Header />
        <div className="portfolio-wrapper">
          <div className="portfololio-container">
            <section className="intro-card">
              <aside className="card-img">
                <img className="card-photo" src="/jpg.jpg" alt="my image" />
              </aside>
              <aside className="intro-card-text">
                <h1 className="intro-line">follow me</h1>
              </aside>
              <aside className="twitter-container">
                <TwitterFollowButton
                  options={{ size: "large", showCount: "false" }}
                  screenName={"jgilbertworks"}
                />
                <TwitterDMButton id={1215768166044856321} />
              </aside>
            </section>

            <div className="body-wrapper">
              <div>
                <section className="overview-container">
                  <section className="overview-card">
                    <aside className="overview-portfolio">
                      <p className="portfolio-text">portfolio</p>
                    </aside>
                    <aside className="button-container">
                      <button className="interactive-button">
                        interactive
                      </button>
                      <button className="front-button">front</button>
                    </aside>
                    <aside className="button-container">
                      <button className="back-button">back</button>
                      <button className="mobile-button">mobile</button>
                    </aside>
                  </section>
                </section>
                <section className="interactive-container">
                  <aside className="interactive-overview">
                    <div className="dot" />
                    <h1 className="card-header">interactive</h1>
                  </aside>
                  <aside className="interactive-one">
                    <img
                      className="interactive-img-one"
                      src="/mealmusic.png"
                      alt="image 1"
                    />
                  </aside>
                  <aside className="interactive-two">
                    <img
                      className="interactive-img-two"
                      src="/mealmusic.png"
                      alt="image 2"
                    />
                    <img
                      className="interactive-img-three"
                      src="/mealmusic.png"
                      alt="image 3"
                    />
                  </aside>
                  <aside className="interactive-three">
                    <img
                      className="interactive-img-four"
                      src="/mealmusic.png"
                      alt="image 4"
                    />
                    <img
                      className="interactive-img-five"
                      src="/mealmusic.png"
                      alt="image 5"
                    />
                  </aside>
                </section>
              </div>
              <section className="front-end-container">
                <aside className="front-end-overview">
                  <div className="dot" />
                  <h1 className="card-header">front-end</h1>
                </aside>
                <aside className="front-end-one">
                  <img
                    className="front-img-one"
                    src="/mealmusic.png"
                    alt="image 6"
                  />
                </aside>
                <aside className="front-end-two">
                  <div className="front-end-two-a">
                    <img
                      className="front-img-two"
                      src="/mealmusic.png"
                      alt="image 7"
                    />
                  </div>
                  <aside className="front-end-three">
                    <img
                      className="front-img-three"
                      src="/mealmusic.png"
                      alt="image 8"
                    />
                    <img
                      className="front-img-four"
                      src="/mealmusic.png"
                      alt="image 9"
                    />
                    <img
                      className="front-img-five"
                      src="/mealmusic.png"
                      alt="image 10"
                    />
                  </aside>
                </aside>
              </section>
              <section className="back-container">
                <aside className="back-end-overview">
                  <div className="dot" />
                  <h1 className="card-header">back-end</h1>
                </aside>
                <aside className="back-end">
                  <img
                    className="back-img"
                    src="/mealmusic.png"
                    alt="image 11"
                  />
                </aside>
                <aside className="back-end-one">
                  <div className="back-end-one-a">
                    <img
                      className="back-img-one"
                      src="/mealmusic.png"
                      alt="image 12"
                    />
                  </div>
                  <aside className="back-end-two">
                    <img
                      className="back-img-two"
                      src="/mealmusic.png"
                      alt="image 13"
                    />
                  </aside>
                </aside>
                <section className="mobile-container">
                  <aside className="mobile-overview">
                    <div className="dot" />
                    <h1 className="card-header">mobile</h1>
                  </aside>
                  <aside className="mobile-one">
                    <img
                      className="mobile-img-one"
                      src="/mealmusic.png"
                      alt="image 14"
                    />
                  </aside>
                  <aside className="mobile-two">
                    <aside className="mobile-two-a">
                      <img
                        className="mobile-img-two"
                        src="/mealmusic.png"
                        alt="image 15"
                      />
                      <img
                        className="mobile-img-three"
                        src="/mealmusic.png"
                        alt="image 16"
                      />
                    </aside>
                    <aside className="mobile-three">
                      <img
                        className="mobile-img-four"
                        src="/mealmusic.png"
                        alt="image 16"
                      />
                    </aside>
                  </aside>
                </section>
              </section>
            </div>
          </div>
        </div>
        <Footer />
        </div>
        <style jsx>{`
        .master-wrapper {
          display: grid;
          grid-template-columns: 1fr;
        }
          .portfolio-wrapper {
            display: grid;
            height: 190vh;
            min-height: 0;
            margin: 2rem;
            padding: 2rem;
            font-family: "Arial";
            // overflow: none;
          }
          .portfolio-container {
            display: grid;
            grid-template-columns: 1fr;
            padding: 30px 30px 30px 30px;
            // width: 100%;
            // height: 1.5vh;
            // margin: 1rem;
            // padding: 1rem;
            text-align: center;
          }
          .intro-card {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            height: auto;
            max-width: 65%;
            min-width: 280px;
            background: white;
            border-radius: 100px;
            border: 1px solid lightgray;
            margin: 0px 0px 2rem 0px;
            box-shadow: -12px 12px 2px 1px rgba(30, 30, 31, 0.2);j,
          }
          .intro-card-text {
            text-align: left;
          }
          .intro-line {
            font-size: 36px;
            justify-self: center;
            position: relative;
            top: 10%;
          }
          .intro-subline {
            font-size: 24px;
            font-weight: lighter;
            color: gray;
            // margin: 1rem;
            // overflow: none;
          }
          .card-img {
            display: grid;
            border-radius: 100%;
            border: none;
            height: 100px;
            width: 100px;
            justify-self: left;
            align-self: center;
            margin: 2rem;
          }
          .card-photo {
            height: 100%;
            width: 100%;
            border-radius: 100%;
            background-color: orange;
            justify-self: center;
            align-self: center;
          }
          .twitter-container {
            display: grid;
            margin: 0 auto;
            align-content: center;
            margin: 1rem;
            overflow: none;
          }
          .twitter-follow-button {
            height: 100px;
          }
          .body-wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr;
            grid-gap: 50px;
          }
          .overview-portfolio {
            display: grid;
            grid-template-columns: 1fr;
            text-align: center;
          }
          .portfolio-text {
            font-size: 24px;
            color: gray;
            margin: 20px 0px 0px 0px;
          }
          .button-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 20px;
          }
          .interactive-button,
          .front-button,
          .back-button,
          .mobile-button {
            height: 50px;
            min-width: 50px;
            font-size: 18px;
            border-radius: 50px;
            background-color: lightgray;
          }
          .interactive-button {
            width: 100%;
          }
          .front-button {
            width: 70%;
            justify-self: center;
          }
          .back-button {
            width: 80%;
          }
          .mobile-button {
            width: 50%;
            min-width: 70px;
          }
          .dot {
            height: 20px;
            width: 20px;
            border-radius: 100%;
            background-color: orange;
            // justify-self:center;
            // align-self:center;
          }

          // portfolio containers

          .interactive-container {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(4, 1fr);
            width: 100%;
            min-width: 200px;
            max-width: 400px;
            height: 505px;
            border: 1px solid lightgray;
            border-radius: 10px;
            margin: 40px 0px 0px 0px;
            margin: 2rem 0px 0px 0px;
            box-shadow: -12px 12px 2px 1px rgba(30, 30, 31, 0.2);
          }

          .overview-card {
            // background-color: purple;
            min-width: 50px;
          }
          .overview-container {
            display: grid;
            grid-template-columns: 1fr;
            width: 100%;
            height: 250px;
            border: 1px solid lightgray;
            border-radius: 10px;
            background-color: white;
            max-width: 400px;
            min-width: 200px;
            // padding: 0px 0px 20px 0px;
            margin: 0px 0px 2rem 0px;
            box-shadow: -12px 12px 2px 1px rgba(30, 30, 31, 0.2);
          }
          // .overview-card {
          //   margin: 0px 0px 2rem 0px;
          // }
          .front-end-container {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(3, 1fr);
            width: 100%;
            min-width: 200px;
            max-width: 400px;
            height: 550px;
            border: 1px solid lightgray;
            border-radius: 10px;
            box-shadow: -12px 12px 2px 1px rgba(30, 30, 31, 0.2);
            
          }
          .back-container {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(2, 1fr);
            width: 100%;
            height: 505px;
            border: 1px solid lightgray;
            border-radius: 10px;
            min-width: 200px;
            max-width: 400px;
            margin: 0px 0px 2rem 0px;
            box-shadow: -12px 12px 2px 1px rgba(30, 30, 31, 0.2);
          }
          .mobile-container {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(3, 1fr);
            width: 100%;
            min-width: 200px;
            max-width: 400px;
            height: 520px;
            border: 1px solid lightgray;
            border-radius: 10px;
            // margin: 60px 0px 0px 0px;
            margin: 2rem 0px 0px 0px;
            overflow: none;
            box-shadow: -12px 12px 2px 1px rgba(30, 30, 31, 0.2);
          }

          // portfolio header & overviews

          .interactive-overview,
          .front-end-overview,
          .back-end-overview,
          .mobile-overview {
            display: grid;
            grid-template-columns: 1fr auto 1fr;
            padding: 20px 20px 20px 20px;
            // height: 50px;
          }
          .card-header {
            font-size: 24px;
          }

          // portfolio-img-containers

          .interactive-one,
          .front-end-one,
          .back-end,
          .mobile-one {
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 10px;
            padding: 0px 20px 0px 20px;
          }
          .interactive-two,
          .interactive-three {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 10px;
            align-self: center;
          }
          .interactive-two {
            padding: 10px 20px 10px 20px;
          }
          .front-end-two,
          .back-end-one,
          .mobile-two {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
          .front-end-two-a {
            display: grid;
            grid-gap: 10px;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
            padding: 10px 0px 20px 20px;
          }
          .back-end-one-a {
            display: grid;
            grid-gap: 10px;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
            padding: 10px 10px 20px 20px;
          }
          .interactive-three {
            padding: 0px 20px 20px 20px;
          }
          .front-end-three {
            display: grid;
            grid-gap: 10px;
            grid-template-colums: 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            padding: 10px 20px 20px 10px;
          }
          .back-end-two {
            display: grid;
            grid-gap: 10px;
            grid-template-colums: 1fr;
            grid-template-rows: 1fr;
            padding: 10px 20px 20px 0px;
          }
          .mobile-two-a {
            display: grid;
            grid-gap: 10px;
            grid-template-colums: 1fr;
            grid-template-rows: 1fr 1fr;
            padding: 10px 10px 20px 20px;
          }
          .mobile-three {
            display: grid;
            grid-gap: 10px;
            grid-template-colums: 1fr;
            grid-template-rows: 1fr;
            padding: 10px 20px 20px 0px;
          }

          // portfolio images

          .interactive-img-one,
          .front-img-one,
          .back-img,
          .mobile-img-one {
            width: 100%;
            height: 150px;
            border-radius: 5px;
          }
          .interactive-img-two,
          .interactive-img-three,
          .interactive-img-four,
          .interactive-img-five,
          .mobile-img-two,
          .mobile-img-three {
            width: 100%;
            height: 100px;
            border-radius: 5px;
          }
          .front-img-two {
            width: 100%;
            height: 250px;
            border-radius: 5px;
          }
          .front-img-three,
          .front-img-four,
          .front-img-five {
            width: 100%;
            height: 75px;
            border-radius: 5px;
          }
          .back-img-one,
          .back-img-two,
          .mobile-img-four {
            width: 100%;
            height: 210px;
            border-radius: 5px;
          }

          // media queries

          media (max-width: 2560px) {
            
          }

          @media (max-width: 1440px) {
            
          }

          @media (max-width: 1200px) {
            .intro-line {
              justify-self: end;
              align-self: end;
            }
            .portfolio-wrapper {
              height: 250vh;
            }
            .portfolio-container {
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr 1fr 1fr;
            }
            .body-wrapper {
              display: grid;
              grid-template-columns: 1fr 1fr;
              grid-template-rows: 1fr 1fr;
            }
            .back-container {
              grid-column: 2/3;
              grid-row: 1/2;
              margin: 0 auto;
            }
          }

          @media (max-width: 1024px) {
            .intro-line {
              justify-self: end;
              align-self: end;
            }
            .portfolio-wrapper {
              height: 250vh;
            }
            .portfolio-container {
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr 1fr 1fr;
            }
            .body-wrapper {
              display: grid;
              grid-template-columns: 1fr 1fr;
              grid-template-rows: 1fr 1fr;
            }
            .back-container {
              grid-column: 2/3;
              grid-row: 1/2;
            }
          }
          @media (max-width: 960px) {
            .portfolio-wrapper {
              height: 420vh;
            }
            .intro-card {
              max-width: 90%;
              max-width: 500px;
              margin: 0 auto;
            }
            .intro-line {
              justify-self: end;
              align-self: end;
            }
            .overview-container,
            .interactive-container {
              margin: 0 auto;
              margin-top: 3rem;
            }

            .body-wrapper {
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
            }
            .front-end-container {
              grid-column: 1/2;
              grid-row: 2/3;
              margin: 0 auto;
            }
            .back-container {
              grid-column: 1/2;
              grid-row: 3/4;
              margin: 0 auto;
            }
            .mobile-container {
              grid-column: 1/2;
              grid-row: 4/5;
              margin: 0 auto;
              margin: 3rem 0px 0px 0px;
            }
          }

          @media (max-width: 768px) {
            .portfolio-wrapper {
              height: 420vh;
            }
            .intro-card {
              max-width: 100%;
              max-width: 500px;
            }
            .intro-line {
              font-size: 30px;
              justify-self: end;
              align-self: end;
              margin: 3rem 0px 0px 0px;
            }
            .overview-container,
            .interactive-container {
              margin: 0 auto;
              margin-top: 3rem;
            }

            .body-wrapper {
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
            }
            .front-end-container {
              grid-column: 1/2;
              grid-row: 2/3;
              margin: 0 auto;
            }
            .back-container {
              grid-column: 1/2;
              grid-row: 3/4;
              margin: 0 auto;
            }
            .mobile-container {
              grid-column: 1/2;
              grid-row: 4/5;
              margin: 0 auto;
              margin: 3rem 0px 0px 0px;
            }
          }

          @media (max-width: 600px) {
            .portfolio-wrapper {
              height: 410vh;
            }
            .intro-card {
              display: grid;
              grid-template-columns: 1fr 1fr;
              // text-align: center;
            }
            .intro-card-text {
              margin: 2rem;
              margin: 0 auto;
              // text-align: right;
            }
            .intro-line {
              font-size: 24px;
              // justify-self: end;
              // align-self: end;
              margin: 1.25rem .25rem .5rem 1rem;
            }
            .card-img,
            .card-photo {
              display: none;
            }
          }

          @media (max-width: 425px) {
            .portfolio-wrapper {
              display: grid;
              margin: .05rem;
              height: 410vh;
            }
            .intro-card {
              grid-template-columns: 1fr;
              max-width: 100%;
              justify-items: center;
            }
            .intro-card-text,
            .card-img,
            .card-photo {
              display: none;
            }
            .intro-card,
              .overview-container,
              .interactive-container,
              .front-end-container,
              .back-container,
              .mobile-container {
                width: 280px;
              }
            }
            @media (max-width: 320px) {
              .portfolio-wrapper {
                height: 480vh;
                margin: .05rem;
              }
              .portfolio-container {
              }
              .intro-card,
              .overview-container,
              .interactive-container,
              .front-end-container,
              .back-container,
              .mobile-container {
                width: 250px;
                align-self: center;
                justify-self: center;
              }
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Portfolio;
