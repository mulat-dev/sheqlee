import JobPostRow from "./JobPostRow";
const JobPostsTable = ({ jobPosts, statuses, toggleStatus }) => (
  <div className="job-posts-table">
    <h2 className="jobPost-title">JOB POSTS</h2>
    <table>
      <thead>
        <tr>
          <th>Job ID</th>
          <th>Job title</th>
          <th>Company</th>
          <th>Applicants</th>
          <th>Post date</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {jobPosts.map((job, index) => (
          <JobPostRow key={job.id} job={job} index={index} statuses={statuses} toggleStatus={toggleStatus} />
        ))}
      </tbody>
    </table>
  </div>
);
export default JobPostsTable;