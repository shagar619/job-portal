import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import { Link } from "react-router-dom";


const MyPostedJobs = () => {

    const { user } = useAuth();

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/jobs?email=${user.email}`)
        .then(res => res.json())
        .then(data => setJobs(data))
    } , [user.email])

    console.log(jobs);

    return (
        <div className="mt-20">
            <h2 className="text-center text-3xl font-bold my-6">Total Posted Jobs : {jobs.length}</h2>

            <div className="overflow-x-auto w-7/12 mx-auto pb-24">
<table className="table">
    {/* head */}
    <thead>
    <tr>
        <th></th>
        <th>Job Title</th>
        <th>JobType</th>
        <th>Application Count</th>
        <th>View Applications</th>
    </tr>
    </thead>
    <tbody>

      {/* row 2 */}
    {
        jobs.map((job,idx) =>     
        <tr key={idx} className="hover">
            <th>{idx + 1}</th>
            <td>{job.title}</td>
            <td>{job.jobType}</td>
            <td>{job?.applicationCount || 0}</td>
            <td>
                <Link to={`/viewApplications/${job._id}`}>
                    <button className="btn btn-link">View Applications</button>
                </Link>
            </td>
        </tr>)
    }

    </tbody>
</table>
</div>

        </div>
    );
};

export default MyPostedJobs;