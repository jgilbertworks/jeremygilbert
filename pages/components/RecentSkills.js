import React, { Component } from "react";

class RecentSkills extends Component {
  codeHubClick = e => {
    e.preventDefault();
    window.location.assign("https://limitless-bayou-67971.herokuapp.com/");
  };
  clickyGame = e => {
    e.preventDefault();
    window.location.assign("https://shielded-woodland-97189.herokuapp.com/");
  };
  petFinder = e => {
    e.preventDefault();
    window.location.assign("https://cryptic-gorge-70462.herokuapp.com/");
  }
  mealMusic = e => {
    e.preventDefault();
    window.location.assign("https://jgilbertworks.github.io/meal-music/");
  }
  render() {
    return (
      <div className="wrapper">
        <div className="recent-work">
          <h1 className="recent-header">recent work</h1>
        </div>
        <div className="recent-container">
          <div>
            <div className="main-card">
              <img 
                onClick={this.codeHubClick}
                className="skill-photo" 
                src="/codehub.png" 
                alt="codeHub" />
            </div>
            <p className="work-description">
              codeHub: a social network for developers
            </p>
          </div>

          <div>
            <div className="main-card">
              <img 
                onClick={this.clickyGame}
                className="skill-photo" 
                src="/memory.png" 
                alt="memory game" />
            </div>
            <p className="work-description">
              Clicky Game: a memory game made in React.js
            </p>
          </div>

          <div>
            <div className="main-card">
              <img
                onClick={this.mealMusic}
                className="skill-photo"
                src="/mealmusic.png"
                alt="my image"
              />
            </div>
            <p className="work-description">
              Meal Music: pair your favorite restaurant and playlist
            </p>
          </div>

          <div>
            <div id="card4" className="main-card">
              <img
                onClick={this.petFinder}
                className="skill-photo"
                src="/petfinder-3.png"
                alt="pet finder"
              />
            </div>
            <p className="work-description">
              Lost & Hound: report missing and lost pets
            </p>
          </div>
        </div>
        <style jsx>{`
          .wrapper {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
            margin: 1rem;
            font-family: "Arial";
          }
          .recent-header {
            margin: 2rem;
            font-size: 40px;
          }
          .recent-container {
            display: grid;
            grid-template-rows: 1fr;
            // margin: 2rem;
            justify-items: center;
            // background-color: purple;
          }
          .main-card {
            display: grid;
            justify-items: center;
            grid-template-columns: repeat(2, fr);
            grid-template-rows: repeat(4 minmax(100px, auto));
            height: 150px;
            width: 90%;
            min-width: 180px;
            max-width: 300px;
            border-radius: 5px;
            margin: 1rem;
            border: 0.5px solid lightgray;
            // box-shadow: -12px 12px 2px 1px rgba(30, 30, 31, 0.2);
            background-color: whitesmoke;
            transition: transform 0.5s ease;
            overflow: hidden;
            transition: all 0.2s ease-in-out;
          }
          .main-card:hover {
            transform: scale(1.1);
          }

          .skill-photo {
            display: grid;
            align-self: end;
            width: 100%;
            height: 100%;
            border-radius: 5px;
            border: 1px solid whitesmoke;
            background-color: white;
            margin: 0 auto;
            background-size: cover;
            /* margin-top:10px;
            // border:1px solid lightgrey;
            margin-right: 10px; */
            cursor: pointer;
            // transition: all .2s ease-in-out;
          }
          .skill-photo:hover {
            // transform: scale(1.1);
          }
          .work-description {
            font-size: 18px;
            font-weight: bold;
            margin: 1rem;
          }

          // media queries

          @media (max-width: 2560px) {
            .recent-container {
              grid-template-columns: 1fr 1fr 1fr 1fr;
              // padding: 0px 100px 0px 100px;
            }
          }

          @media (max-width: 1440px) {
            .recent-container {
              grid-template-columns: 1fr 1fr 1fr 1fr;
              grid-template-rows: 1fr;
              // padding: 0px 75px 0px 75px;
            }
          }

          @media (max-width: 1024px) {
            .recent-container {
              grid-template-columns: 1fr 1fr;
              // padding: 0px 50px 0px 50px;
            }
          }

          @media (max-width: 768px) {
            .recent-container {
              grid-template-columns: 1fr 1fr;
              margin: 0.05rem;
              padding: 0.05rem;
              // padding: 0px 25px 0px 25px;
            }
          }

          @media (max-width: 425px) {
            .recent-container {
              grid-template-columns: 1fr;
              padding: 0px 10px 0px 10px;
            }
          }
        `}</style>
      </div>
    );
  }
}
export default RecentSkills;
