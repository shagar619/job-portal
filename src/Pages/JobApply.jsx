import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";


const JobApply = () => {

    const { id } = useParams();

    const { user } = useAuth();

    const navigate = useNavigate();

    const submitJobApplication = (e) => {
        e.preventDefault();

        const form = e.target;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;

        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            linkedin,
            github,
            resume
        }


        fetch('http://localhost:5000/job-applications', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    position: "middle",
                    icon: "success",
                    title: "You have successfully submit your application.",
                    showConfirmButton: true,
                });
                navigate('/myApplications');
            }
        })
    }

    return (
        <div>
        <div className="w-1/3 mx-auto">
            
    <form onSubmit={submitJobApplication}>

<label className="form-control w-full">
    <div className="label">
    <span className="label-text text-lg font-normal">LinkedIn URL *</span>
    </div>
    <input type="url" name="linkedin" placeholder="Enter Your LinkedIn URL" className="input input-bordered w-full" />
</label>

<label className="form-control w-full">
    <div className="label">
    <span className="label-text text-lg font-normal">Github URL *</span>
    </div>
    <input type="url" name="github" placeholder="Enter Your Github URL" className="input input-bordered w-full" />
</label>

<label className="form-control w-full">
    <div className="label">
    <span className="label-text text-lg font-normal">Resume URL *</span>
    </div>
    <input type="url" name="resume" placeholder="Enter Your Resume Link" className="input input-bordered w-full" />
</label>

<input className="bg-[#023047] text-white w-full py-3 rounded cursor-pointer my-4" type="submit" value="Submit & Register" />

</form>
        </div>
        </div>
    );
};

export default JobApply;
