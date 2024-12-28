import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const ViewApplications = () => {

    const applications = useLoaderData();

    const handleUpdateStatus = (e, id) => {
        const data = {
            status: e.target.value
        }

        fetch(`http://localhost:5000/job-applications/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                Swal.fire({
                    position: "middle",
                    icon: "success",
                    title: "Status has been updated.",
                    showConfirmButton: true,
            });
        }
        })
    }

    return (
        <div className="mt-20">
            <h2 className="text-center text-3xl font-bold my-6">View total applications for this job : {applications.length}</h2>

            <div className="overflow-x-auto w-7/12 mx-auto pb-24">
<table className="table">
    {/* head */}
    <thead>
    <tr>
        <th></th>
        <th>E-mail</th>
        <th>Status</th>
        <th>Update Status</th>
    </tr>
    </thead>
    <tbody>


    {
        applications.map((app, idx) =>     
        <tr key={idx} className="hover">
            <th>{idx + 1}</th>
            <td>{app.applicant_email}</td>
            <td>{status}</td>
            <td>
                <select 
                onChange={(e) => handleUpdateStatus(e, app._id)}
                defaultValue={app.status || 'Change Status'}
                className="select select-bordered select-sm w-full max-w-xs">
                    <option disabled>Change Status</option>
                    <option>Under Review</option>
                    <option>Set Interview</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                </select>
            </td>
        </tr>)
    }

    </tbody>
</table>
</div>
            
        </div>
    );
};

export default ViewApplications;