import React, { Component } from "react";

class RecentSkills extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="recent-work">
          <h1>recent work</h1>
        </div>
        <div className="recent-container">
          <div className="main-card">
            <img className="skill-photo" src="/codehub.png" alt="my image" />
          </div>
          <div className="main-card">
            <img className="skill-photo" src="/memory.png" alt="my image" />
          </div>
          <div className="main-card">
            <img className="skill-photo" src="/mealmusic.png" alt="my image" />
          </div>
          <div id="card4" className="main-card">
            <img
              className="skill-photo"
              src="/petfinder-3.png"
              alt="my image"
            />
          </div>
        </div>
        <style jsx>{`
          .wrapper {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
            margin: 1rem;
            text-align: center;
            font-family: "Arial";
          }
          .recent-container {
            display: grid;
            grid-template-rows: 1fr;
            // margin: 2rem;
            justify-items: center;
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
            border-radius: 10px;
            margin: 1rem;
            border: 1px solid lightgray;
            box-shadow: -12px 12px 2px 1px rgba(30, 30, 31, 0.2);
            background-color: whitesmoke;
            transition: transform 0.5s ease;
            overflow: hidden;
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
        border:1px solid lightgrey;
        margin-right: 10px; */
            cursor: pointer;
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
