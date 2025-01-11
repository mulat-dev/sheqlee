import React from 'react';
import './Companies.css';
import upArrow from '../../assets/up-arrow.png';
import downArrow from '../../assets/down-arrow.png';

const JobPostsdashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Top Section */}
      <div className="top-section">
        <div className="kard">
          <h2>1,124</h2>
          <p>Total companies registered</p>
        </div>

        <div className="kard">
          <h2>245</h2>
          <p>
          Co. registered in
            <select>
              <option>2022</option>
              {/* Add more years dynamically if needed */}
            </select>
          </p>
        </div>

        <div className="kard">
          <h2>35</h2>
          <p>
          Co. registered in
            <select>
              <option>June</option>
              {/* Add more months dynamically if needed */}
            </select>
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom-section">
        <div className="trend-card">
          <h2>175</h2>
          <div className="trend">
            <img src={upArrow} alt="Up arrow" />
            <span className="trend-up">11%</span>
          </div>
          <p>Co. registered this year so far</p>
        </div>

        <div className="trend-card">
          <h2>14</h2>
          <div className="trend">
            <img src={downArrow} alt="Down arrow" />
            <span className="trend-down">7%</span>
          </div>
          <p>Co. registered this month so far</p>
        </div>
      </div>
    </div>
  );
};

export default JobPostsdashboard;
