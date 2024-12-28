import { CiLocationOn } from "react-icons/ci";
import { IoIosTimer } from "react-icons/io";
import { PiShoppingBagOpenThin } from "react-icons/pi";
import { Link, useLoaderData } from "react-router-dom";


const JobDetails = () => {

    const { _id ,title, company, applicationDeadline, category, company_logo, jobType, description, location, requirements, responsibilities, salaryRange, hr_name, hr_email } = useLoaderData();

    return (
        <div className="border rounded mb-32 mt-10 py-6 pl-10">
            <h3 className="text-3xl font-bold my-6">Position : {title}</h3>
            <div className="flex items-center gap-4">
                <img className="" src={company_logo} alt="" />
            <div>
            <h3 className="text-xl font-bold">{company}</h3>
            <p className="flex items-center text-base font-normal text-gray-400  gap-1"><CiLocationOn></CiLocationOn> {location}</p>
            </div>
            </div>
            
            <h3 className="text-2xl font-bold mt-4 mb-3">{category}</h3>
            
            <div className="flex items-center gap-4 text-base font-normal text-gray-400">
            <p className="flex items-center gap-2"><PiShoppingBagOpenThin></PiShoppingBagOpenThin> {jobType}</p>
            <p className="flex items-center gap-2"><IoIosTimer></IoIosTimer> {applicationDeadline}</p>
            </div>
            
            <p className="my-4 text-lg font-medium text-gray-600">{description}</p>

            <div className="mb-6">
                <h3 className="text-2xl font-bold my-3">Responsibilities : </h3>
                {
                    responsibilities.map((duty, idx) => <oll>
                        <li key={idx} className="text-lg font-medium text-gray-600 space-y-3">{duty}</li>
                    </oll>)
                }
            </div>


            <div className="space-x-2">
                <h3 className="text-2xl font-bold my-6">Requirements : </h3>
                {
                    requirements.map((item, idx) => <button className="btn bg-blue-100 text-base font-medium text-gray-500" key={idx}>{item}</button>)
                }
            </div>

            <h3 className="text-lg text-blue-600 font-bold my-6">Salary : <span className="text-2xl font-bold">{salaryRange.min} - {salaryRange.max}</span> {salaryRange.currency}</h3>

            <div className="space-y-2 mb-4">
                <h3 className="text-2xl font-bold">Contact : </h3>
                <h3 className="text-xl font-semibold">{hr_name}</h3>
                <h3 className="text-lg font-medium">{hr_email}</h3>
            </div>

            <Link to={`/jobApply/${_id}`}><button className="bg-blue-600 py-3 w-1/3 rounded text-white text-xl font-semibold cursor-pointer hover:bg-[#023047] ">Apply Now</button></Link>

        </div>
    );
};

export default JobDetails;