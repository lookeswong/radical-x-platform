import React, {useState } from "react";
import Button from "../Button/Button";
import './Insights.css';

import calender from '../../images/calendar-2.svg';
import chart from '../../images/Vector 4.svg';

export default function Insights() {
  // Is this good react practices? setting up 2 different state?
  const [weekButton, setWeekButton] = useState(true);
  const [monthButton, setMonthButton] = useState(false)

  const handleChange = () => {
    setWeekButton(prevState => !prevState)
    setMonthButton(prevState => !prevState)
    // console.log(button)
  }

  return (
    <div className="container--insights">
      <div className="container--insights-text">
        <h3>Internship Insights</h3>
        <p>In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in which knowledge about space can e both a priori and synthetic.</p>
      </div>
      <div className="container--insights-chart">
        <div className="insights-chart-header">
          <div className="header-btn">
            {/* COME BACK AND FIX THIS, RIGHT NOW BOTH BUTTON LIGHT UP AT THE SAME TIME */}
            <Button name="This week" isSelected={weekButton} handleClick={handleChange}/>
            <Button name="This month" isSelected={monthButton} handleClick={handleChange}/>
          </div>
          <div className="header-btn-date">
            <img src={calender} alt="calender logo"/>
            <span>Select dates</span>
          </div>
        </div>
        <div className="insights-chart-graph">
          {/* GRAPH GOES HERE */}
          <img src={chart}/>
          <div className="graph-axis">
            <div className="axis-text">
              <h3>100,000</h3>
              <p>Total Enrollments</p>
            </div>
            <div className="axis-text">
              <h3>65,000</h3>
              <p>Completion</p>
            </div>
            <div className="axis-text">
              <h3>850</h3>
              <p>Qualified Candidates</p>
            </div>
            <div className="axis-text">
              <h3>375</h3>
              <p>Reached Out</p>
            </div>
            <div className="axis-text">
              <h3>300</h3>
              <p>Interview set</p>
            </div>
            <div className="axis-text">
              <h3>150</h3>
              <p>Candidates Hired</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}