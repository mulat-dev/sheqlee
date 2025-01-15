import React, { useState } from "react";
import './Styles/CompaniesTab.css'; // Add styling similar to EmailAlerts.css
import upArrow from '../../assets/up-arrow.png';
import downArrow from '../../assets/down-arrow.png';

const CompaniesTab = () => {
  const [selectedYear, setSelectedYear] = useState("2022");
  const [selectedMonth, setSelectedMonth] = useState("June");

  return (
    <div className="dashboard-container">
      {/* Top Section */}
      <div className="top-section">
        <div className="kard">
          <h2>14,124</h2>
          <p>Total company subs</p>
        </div>

        <div className="kard">
          <h2>1,045</h2>
          <p>
           Company subs in
            <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              {/* Add more years dynamically if needed */}
            </select>
          </p>
        </div>

        <div className="kard">
          <h2>145</h2>
          <p>
            company subs in
            <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
              <option value="June">June</option>
              <option value="July">July</option>
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
          <p>Company subs this year so far</p>
        </div>

        <div className="trend-card">
          <h2>84</h2>
          <div className="trend">
            <img src={downArrow} alt="Down arrow" />
            <span className="trend-down">7%</span>
          </div>
          <p>Company subs this month so far</p>
        </div>
      </div>
    </div>
  );
};

export default CompaniesTab;
