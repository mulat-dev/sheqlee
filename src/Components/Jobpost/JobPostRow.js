import React from "react";
import eyeIcon from "../../assets/eye.png"; // Adjust the path based on your folder structure
import deleteIcon from "../../assets/delete.png"; // Adjust the path based on your folder structure

const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

const JobPostRow = ({ job, index, statuses, toggleStatus }) => (
  <tr className={statuses[index] ? "row-active" : "row-inactive"}>
    <td>{job.id}</td>
    <td>{truncateText( job.title, 3)}</td>
    <td>{truncateText(job.company, 3)}</td>
    <td>{job.applicants}</td>
    <td>{job.postDate}</td>
    <td>
      {statuses[index] ? (
        <span className="status-text active">Active</span>
      ) : (
        <span className="status-text inactive">Inactive</span>
      )}
    </td>
    <td>
      {/* Updated toggle button with moving dot */}
      <button
        className={`status-toggle ${statuses[index] ? "active" : "inactive"}`}
        onClick={() => toggleStatus(index)}
      >
        <div className="status-point"></div>
      </button>

      {/* Eye Icon Button */}
      <button className="action-button">
        <img src={eyeIcon} alt="View" className="view-icon" />
      </button>

      {/* Delete Icon Button */}
      <button className="action-button">
        <img src={deleteIcon} alt="Delete" className="delete-icon" />
      </button>
    </td>
  </tr>
);

export default JobPostRow;
