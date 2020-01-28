import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Chart from "react-google-charts";
import { faBold } from "@fortawesome/free-solid-svg-icons";

const data = [
  ["Task", "Hours per Day"],
  ["front-end", 10],
  ["back-end", 2.5],
  ["data", 2.5],
  ["design", 2.5]
  // ["Sleep", 7] // CSS-style declaration
];

const options = {
  // title: "my skills",
  pieHole: 0.0,
  is3D: false,
  fontSize: 16,
  fontName: "Arial",
  fontWeight: "bold",
  // fontColor: 'black',
  pieSliceBorderColor: "lightgray",
  pieSliceTextStyle: {
    color: "black"
  },
  tooltip: {
    text: "percentage"
  },
  legend: "none",
  pieSliceText: "label",
  pieStartAngle: 275,
  backgroundColor: "whitesmoke",
  chartArea: { left: 15, top: 15, right: 15, bottom: 50 },

  // chartArea: { left: 15, top: 15, right: 0, bottom: 0 },
  slices: [
    {
      color: "#FF7F00",
      opacity: 0.8,
      offset: 0.05
    },
    {
      color: "#4E8098",
      opacity: 0.8,
      offset: 0.1
    },
    {
      color: "#CED3DC",
      opacity: 0.8,
      offset: 0.15
    },
    {
      color: "#FCF7F8",
      offset: 0.1
    }
  ]
  // chartArea: {
  //   left: 0,
  //   top: 0,
  //   width: "100%",
  //   height: "80%"
  // },
};

class SkillChart extends Component {
  render() {
    return (
      <div className="chart-wrapper">
        <div>
          <ul>
            <h1 className='list-header'>front</h1>
            <li className="fa">
              <FontAwesomeIcon icon={["fab", "html5"]} size="3x" />
              
            </li>
            <li className="fa">
              <FontAwesomeIcon icon={["fab", "css3"]} size="3x" />
            </li>
            <li className="fa">
              <FontAwesomeIcon icon={["fab", "js-square"]} size="3x" />
            </li>
            <li className="fa">
              <FontAwesomeIcon icon={["fab", "react"]} size="3x" />
            </li>
            <li className="fa">
              <FontAwesomeIcon icon={["fab", "chrome"]} size="3x" />
            </li>
          </ul>
        </div>
        <div className='chart-container'>
          <h1>my skills</h1>
          <Chart
            loader={<div>Loading Chart</div>}
            chartType="PieChart"
            width="100%"
            height="500px"
            data={data}
            options={options}
          />
        </div>
        <div>
          <ul>
            <h1 className='list-header'>back</h1>
            <li>
              <FontAwesomeIcon icon={["fab", "python"]} size="3x" />
            </li>
            <li>
              <FontAwesomeIcon icon={["fab", "node"]} size="3x" />
            </li>
            <li>
              <img className="skill-img" src="/mongodb.png" alt="my image" />
            </li>
            <li>
              <img className="skill-img" src="/mysql.png" alt="my image" />
            </li>
            <li>
              <img className="skill-img" src="/express.png" alt="my image" />
            </li>
          </ul>
        </div>
        <style jsx>{`
          .chart-wrapper {
            display: grid;
            // padding: 100px 100px 0px 100px;
            padding: 2rem;
            border-top: 1px solid lightgray;
            grid-template-columns: 1fr 60% 1fr;
            background-color: whitesmoke;
            text-align: center;
            margin: 0 auto;
            font-family: "Arial";
          }
          .skill-img {
            background-size: cover;
            width: 75px;
          }
          ul {
            list-style-type: none;
            font-size: 25px;
            padding: 15px;
          }
          li {
            padding: 1px;
          }
          .fa {
            padding: 3px;
          }

          //media queries

          media (max-width: 2560px) {
          }

          @media (max-width: 1440px) {
          }

          @media (max-width: 1024px) {
            .chart-wrapper {
              grid-template-columns: 1fr;
              grid-template-rows: 1fr 60% 1fr;
              display: block;
            }
            ul {
              display: flex;
              justify-content: space-between;
            }
            .li {
              margin: .05rem;
              padding: .05rem;
            }
            .list-header {
              display: none;
            }
          }
          @media (max-width: 960px) {
          }

          @media (max-width: 768px) {
            ul {
              display: flex;
              justify-content: space-between;
            }
            .list-header {
              display: none;
            }
          }

          @media (max-width: 425px) {
            .chart-wrapper {
              margin: .05rem;
              padding: .05rem;
              font-size: 14px;
            }

            ul {
              display: none;
            }

            h1 {
              font-size: 36px;
              margin: 2rem 0px 0px 0px;
            }
            .chart-container {
              height: auto;
              padding: .5rem;
              font-size: 10px;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default SkillChart;
