import React from 'react';
import './EmailAlerts.css';
import upArrow from '../../assets/up-arrow.png';
import downArrow from '../../assets/down-arrow.png';

const EmailAlerts = () => {
  return (
    <div className="dashboard-container">
      {/* Top Section */}
      <div className="top-section">
        <div className="kard">
          <h2>5,471</h2>
          <p>Total  Email alerts sent </p>
        </div>

        <div className="kard">
          <h2>1,587</h2>
          <p>
          Email alerts sent in
            <select>
              <option>2022</option>
              {/* Add more years dynamically if needed */}
            </select>
          </p>
        </div>

        <div className="kard">
          <h2>214</h2>
          <p>
          Email alerts sent in
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
          <h2>874</h2>
          <div className="trend">
            <img src={upArrow} alt="Up arrow" />
            <span className="trend-up">11%</span>
          </div>
          <p>Email alerts sent this year so far</p>
        </div>

        <div className="trend-card">
          <h2>101</h2>
          <div className="trend">
            <img src={downArrow} alt="Down arrow" />
            <span className="trend-down">7%</span>
          </div>
          <p>Email alerts sent this month so far</p>
        </div>
      </div>
    </div>
  );
};

export default EmailAlerts;
