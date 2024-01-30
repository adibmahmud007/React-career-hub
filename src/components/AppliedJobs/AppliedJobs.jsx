import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";



const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobsFilter = filter =>{
        if(filter === 'all'){
            setDisplayJobs(appliedJobs);
        }
        else if (filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if(filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {


            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));

            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
            // console.log(jobs, storedJobIds, jobsApplied)
        }
    }, [jobs])
    return (
        <div>
            <div className="flex justify-between items-center">
            <h2 className="md:text-2xl text-xl ml-6 md:ml-8">Total jobs applied: {appliedJobs.length}</h2>
            <details className="dropdown mb-3">
                <summary className="m-1 btn">Filter By</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                    <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleJobsFilter('onsite')}><a>onsite</a></li>
                </ul>
            </details>
            </div>
           <div>
           <ul className="border-gray-800 p-2 ">
                {
                    displayJobs.map(job => <li key={job.id}>
                        <div className="bg-gray-100 rounded-lg p-5 m-5 text-xl">
                            
                            <h2 className=" font-bold">{job.job_title} </h2>
                            <p>Compnay name: {job.company_name}</p>
                            <p>{job.remote_or_onsite}</p>
                            <div>
                                <p>Location:{job.location}  Salary:{job.salary}</p>
                            </div>
                        </div>
                       
                    </li>)
                }
            </ul>
           </div>
        </div>
    );
};

export default AppliedJobs;