
import PropTypes from 'prop-types';
import '../../App.css'
import { IoLocationSharp } from "react-icons/io5";
import { AiOutlineDollarCircle } from "react-icons/ai";

const Job = ({ job }) => {
    const { job_title,logo,company_name,remote_or_onsite,location,job_type,salary } = job;
    return (
        <div className="card card-compact px-4  bg-base-100 shadow-xl mt-5 pt-5 flex flex-col">
            <figure><img className='w-40' src={logo} alt="Shoes" /></figure>
            <div className="card-body ">
                <h2 className="card-title px-3">{job_title}</h2>
                <p className='px-3 text-lg text-gray-500'>{company_name}</p>
                <div>
                    <button className='px-5 py-2 font-extrabold text-lg text-purple-600 border border-purple-400 rounded-md mx-2'>{remote_or_onsite}</button>
                    <button className='px-5 py-2 font-extrabold text-lg text-purple-600 border border-purple-400 rounded-md mx-2'>{job_type}</button>
                </div>
                <div className='flex my-4 '>
                    <h2 className=' flex mr-4'><IoLocationSharp className='text-2xl mr-3' />{location}</h2>
                    <h2 className='flex'><AiOutlineDollarCircle className='text-2xl mr-3' />{salary}</h2>
                </div>
                <div className="card-actions ">
                    <button className="button btn-primary text-sm">View Details</button>
                </div>
            </div>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object.isRequired,
}
export default Job;