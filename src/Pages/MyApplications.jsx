import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import { MdDelete } from "react-icons/md";


const MyApplications = () => {

    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/job-applications?email=${user.email}`)
        .then(res => res.json())
        .then(data => setJobs(data))
    } , [user.email])

    return (
        <div className="w-9/12 mx-auto py-32">
            <h2 className="text-center text-3xl font-bold text-blue-600 my-8">Total Application : {jobs.length}</h2>

            <div className="overflow-x-auto">
<table className="table">
    {/* head */}
    <thead>
    <tr>
        <th>

        </th>
        <th>Company</th>
        <th>Job/Type</th>
        <th>HR E-mail</th>
        <th></th>
    </tr>
    </thead>
    <tbody>


      {/* row 1 */}
    {
        jobs.map(job =>     
        <tr key={job._id} className="hover">
            <th>
            <label>
                <input type="checkbox" className="checkbox" />
            </label>
            </th>
            <td>
            <div className="flex items-center gap-3">
                <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                    <img
                        src={job.company_logo}
                        alt="Avatar Tailwind CSS Component" />
                </div>
                </div>
                <div>
                    <div className="font-bold">{job.title}</div>
                    <div className="text-sm opacity-50">{job.location}</div>
                </div>
            </div>
            </td>
            <td>
                {job.category}
            <br />
            <span className="badge badge-ghost badge-sm">{job.jobType}</span>
            </td>
            <td>{job.hr_email}</td>
            <th>
            <button 
                className="bg-[#EA4744] p-2 rounded"><MdDelete className="text-white"></MdDelete></button>
            </th>
        </tr>)
    }


    </tbody>
</table>
</div>

        </div>
    );
};

export default MyApplications;
