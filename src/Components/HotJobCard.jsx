import { CiLocationOn } from "react-icons/ci";
import { PiShoppingBagOpenThin } from "react-icons/pi";
import { IoIosTimer } from "react-icons/io";
import { button } from "motion/react-client";
import { Link } from "react-router-dom";

const HotJobCard = ({ job }) => {

    const { _id ,salaryRange, company, location, jobType, category, applicationDeadline, description, company_logo, requirements  } = job;

    return (
        <div className="border rounded py-6 px-3 bg-blue-50">

            <div className="flex items-center gap-4">
                <img className="h-20 w-20" src={company_logo} alt="" />
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

            <div className="space-x-2 space-y-2">
                {
                    requirements.map((item, idx) => <button className="btn bg-blue-100 text-base font-medium text-gray-500" key={idx}>{item}</button>)
                }
            </div>

            <h3 className="text-lg text-blue-600 font-bold my-6">Salary : <span className="text-2xl font-bold">{salaryRange.min} - {salaryRange.max}</span> {salaryRange.currency}</h3>

        <Link to={`/jobs/${_id}`}><button className="bg-blue-100 py-2 w-full rounded-md text-base font-normal cursor-pointer hover:bg-blue-600 hover:text-white">Apply Now</button></Link>
            
        </div>
    );
};

export default HotJobCard;