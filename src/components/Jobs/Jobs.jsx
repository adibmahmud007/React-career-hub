import { useLoaderData } from "react-router-dom";
import Job from "../Job/Job";

const Jobs = () => {
    const jobs= useLoaderData();
    console.log(jobs,'jobs from all jobs')
    return (
        <div className="py-5">
            
            <div className="md:grid md:grid-cols-2 md:gap-6">
            {
                    jobs.map(job=> <Job key={job.id} job={job}/>)
            }
            </div>
            
        
        </div>
    );
};

export default Jobs;
