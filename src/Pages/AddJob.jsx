import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";



const AddJob = () => {

    const { user } = useAuth();

    const navigate = useNavigate();

    const handleAddJob = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());


        const { min, max, currency, ...newJob } = initialData;
        newJob.salaryRange = { min, max, currency };
        newJob.requirements = newJob.requirements.split('\n');
        newJob.responsibilities = newJob.responsibilities.split('\n');
        

        fetch('http://localhost:5000/jobs', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    position: "middle",
                    icon: "success",
                    title: "Job has been added successfully.",
                    showConfirmButton: true,
                });
                navigate('/');
            }       
        })
    }

    return (
        <div className="mt-20 mb-48">
            <div className="w-7/12 mx-auto bg-[#f8f9fa] py-12 px-20 rounded-lg shadow-2xl">
            <form onSubmit={handleAddJob} className="space-y-4">


                {/* Job title */}
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text text-lg font-normal">Job Title *</span>
                    </div>
                    <input type="text" name="title" required placeholder="Enter job title" className="input input-bordered w-full" />
                </label>

                {/* Job location */}
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text text-lg font-normal">Job location *</span>
                    </div>
                    <input type="text" name="location" required placeholder="Enter job location" className="input input-bordered w-full" />
                </label>


                {/* company name */}
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text text-lg font-normal">Company Name *</span>
                    </div>
                    <input type="text" name="company" required placeholder="Enter company name" className="input input-bordered w-full" />
                </label>


                {/* Description */}
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text text-lg font-normal">Description *</span>
                    </div>
                    <textarea required className="textarea textarea-bordered text-base font-normal text-gray-500" name="description" placeholder="Enter job description"></textarea>
                </label>


                {/* JobType */}
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text text-lg font-normal">Job Type *</span>
                    </div>
                    <select defaultValue={'Select JobType'} name="jobType" required className="select text-base font-normal text-gray-500 select-bordered w-full">
                        <option disabled>Select JobType</option>
                        <option>Full-time</option>
                        <option>Hybrid</option>
                        <option>Remote</option>
                        <option>Part-time</option>
                        <option>Intern</option>
                    </select>
                </label>


                {/* category */}
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text text-lg font-normal">Category *</span>
                    </div>
                    <select defaultValue={'Pick a Job Field'} name="category" required className="select text-base font-normal text-gray-500 select-bordered w-full">
                        <option disabled>Pick a Job Field</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Development</option>
                        <option>Management</option>
                        <option>Data Science</option>
                        <option>Finance</option>
                        <option>Teaching</option>
                    </select>
                </label>


                {/* salary range */}
                <label className="form-control w-full">
                <div className="label">
                    <span className="label-text text-lg font-normal">Salary range *</span>
                </div>

                <div className="flex justify-between items-center gap-3">
                <input type="number" name="min" required placeholder="Min" className="input input-bordered w-full" />

                <input type="number" name="max" required placeholder="Max" className="input input-bordered w-full" />

                <select defaultValue={'Currency'} name="currency" required className="select text-base font-normal text-gray-500 select-bordered w-full">
                    <option disabled>Currency</option>
                    <option>USD</option>
                    <option>BDT</option>
                    <option>EURO</option>
                    <option>INR</option>
                </select>
                </div>
                </label>


                {/* company logo */}
                <label className="form-control w-full">
                <div className="label">
                    <span className="label-text text-lg font-normal">Company logo URL *</span>
                </div>
                    <input type="url" name="company_logo" required placeholder="Enter Company logo URL" className="input input-bordered w-full" />
                </label>


                {/* Requirements */}
                <label className="form-control w-full">
                <div className="label">
                    <span className="label-text text-lg font-normal">Requirements *</span>
                </div>
                <textarea className="textarea textarea-bordered text-base font-normal text-gray-500" name="requirements" placeholder="Put each requirements in a new line"></textarea>
                </label>
    
                {/* Responsibilities */}
                <label className="form-control w-full">
                <div className="label">
                        <span className="label-text text-lg font-normal">Responsibilities *</span>
                </div>
                <textarea className="textarea textarea-bordered text-base font-normal text-gray-500" name="responsibilities" placeholder="Write each responsibilities in a new line"></textarea>
                </label>


                {/* applicationDeadline */}
                <label className="form-control w-full">
                <div className="label">
                    <span className="label-text text-lg font-normal">Application Deadline *</span>
                </div>
                    <input type="date" name="
                    applicationDeadline" required className="input input-bordered w-full" />
                </label>


                {/* hr email */}
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text text-lg font-normal">HR E-mail *</span>
                    </div>
                    <input defaultValue={user?.email} type="email" name="hr_email" required placeholder="Enter HR email" className="input input-bordered w-full" />
                </label>

    
                {/* hr name */}
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text text-lg font-normal">HR Name *</span>
                    </div>
                    <input type="text" name="hr_name" required placeholder="Enter HR Name" className="input input-bordered w-full" />
                </label>

                <input className="bg-blue-600 w-full text-center text-white py-3 rounded hover:btn text-lg font-medium" type="submit" value="Add Job" />


    
                </form>
            </div>
        </div>
    );
};

export default AddJob;