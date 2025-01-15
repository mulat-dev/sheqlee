import React from 'react';
import './JobPostsTab.css';
import upArrow from '../../assets/up-arrow.png';
import downArrow from '../../assets/down-arrow.png';

const JobPosts = () => {
  return (
    <div className="dashboard-container">
      {/* Top Section */}
      <div className="top-section">
        <div className="kard">
          <h2>14,124</h2>
          <p>Total jobs posted</p>
        </div>

        <div className="kard">
          <h2>1,045</h2>
          <p>
            Jobs posted in
            <select>
              <option>2022</option>
              {/* Add more years dynamically if needed */}
            </select>
          </p>
        </div>

        <div className="kard">
          <h2>145</h2>
          <p>
            Jobs posted in
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
          <h2>984</h2>
          <div className="trend">
            <img src={upArrow} alt="Up arrow" />
            <span className="trend-up">11%</span>
          </div>
          <p>Jobs posted this year so far</p>
        </div>

        <div className="trend-card">
          <h2>84</h2>
          <div className="trend">
            <img src={downArrow} alt="Down arrow" />
            <span className="trend-down">7%</span>
          </div>
          <p>Jobs posted this month so far</p>
        </div>
      </div>
    </div>
  );
};

export default JobPosts;
