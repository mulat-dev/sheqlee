import React from "react";
import JobFilter from "./JobFilter";
import JobPostsTable from "./JobPostsTable";
import './JobPosts.css';
const JobPosts = () => {
  const [statuses, setStatuses] = React.useState([true, false, true, false, true, true, false]);

  const toggleStatus = (index) => {
    const newStatuses = [...statuses];
    newStatuses[index] = !newStatuses[index];
    setStatuses(newStatuses);
  };

  const jobPosts = [
    {
      id: "JID0001",
      title: "Senior mobile app developer",
      company: "Kepler Inc.",
      applicants: 5,
      postDate: "14 Jun 2022",
    },
    {
      id: "JID0002",
      title: "Product and UI/UX designer",
      company: "Kepler Inc.",
      applicants: 11,
      postDate: "14 Jun 2022",
    },
    {
      id: "JID0003",
      title: "Backend developer using FastAPI",
      company: "Flying Co.",
      applicants: 2,
      postDate: "14 Jun 2022",
    },
    {
      id: "JID0004",
      title: "Software Engineer I",
      company: "Flying Co.",
      applicants: 7,
      postDate: "14 Jun 2022",
    },
    {
      id: "JID0005",
      title: "Full-Stack web developer",
      company: "Flying Co.",
      applicants: 17,
      postDate: "14 Jun 2022",
    },
    {
      id: "JID0006",
      title: "Software quality assurance analyst",
      company: "Flying Co.",
      applicants: 0,
      postDate: "14 Jun 2022",
    },
    {
      id: "JID0007",
      title: "UI developer",
      company: "Flying Co.",
      applicants: 21,
      postDate: "14 Jun 2022",
    },
  ];

  return (
    <div className="job-posts-container">
      <JobFilter />
      <JobPostsTable jobPosts={jobPosts} statuses={statuses} toggleStatus={toggleStatus} />
    </div>
  );
};

export default JobPosts;
