import React from 'react';
import search from '../../assets/search.png';
import calandar from '../../assets/calandar.png';

const JobFilter = () =>{
  return (
  <div className="filter-container">
    <h2 className="filter-title">FILTER BY</h2>
    <div className="filter-options">
      {['Status', 'Category', 'Tags', 'Action', 'Job type', 'Skill level'].map(option => (
        <select className="filter-dropdown" key={option}>
          <option>{option}</option>
        </select>
      ))}
      <div className="date-search-row">
        <div className="date-picker">
          <img src={calandar} alt="Calendar" className="calendar-icon" />
          <input type="date" className="date-input" aria-label="Select a date" />
        </div>
        <div className="search-input-container">
          <img src={search} alt="Search" className="search-icon" />
          <input type="text" placeholder="Search by title or company name..." className="search-input" />
        </div>
      </div>
    </div>
  </div>
);
};
export default JobFilter;