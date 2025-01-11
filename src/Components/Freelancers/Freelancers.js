import React from 'react';
import upArrow from '../../assets/up-arrow.png';
import downArrow from '../../assets/down-arrow.png';
import '../Freelancers/Freelancers.css'
const JobPostsdashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Top Section */}
      <div className="card-section">
        <div className="card">
          <h2>5,471</h2>
          <p>Total companies registered</p>
        </div>

        <div className="card">
          <h2>1,587</h2>
          <p>
          Freelancers registered in
            <select>
              <option>2022</option>
              {/* Add more years dynamically if needed */}
            </select>
          </p>
        </div>

        <div className="card">
          <h2>214</h2>
          <p>
          Freelancers registered in
            <select>
              <option>June</option>
              {/* Add more months dynamically if needed */}
            </select>
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="card-section2">
        <div className="trend-kard">
          <h2>874</h2>
          <div className="trend">
            <img src={upArrow} alt="Up arrow" />
            <span className="trend-up">11%</span>
          </div>
          <p>Freelancers registered this year so far</p>
        </div>

        <div className="trend-kard">
          <h2>101</h2>
          <div className="trend">
            <img src={downArrow} alt="Down arrow" />
            <span className="trend-down">7%</span>
          </div>
          <p>Freelancers registered this month so far</p>
        </div>
      </div>
    </div>
  );
};

export default JobPostsdashboard;
