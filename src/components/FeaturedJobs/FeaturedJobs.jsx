import { useEffect, useState } from "react";
import Job from "../Job/Job";
const FeaturedJobs = () => {  
    const [jobs,setJobs]=useState([]);
    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data));
    },[])
    return (
        <div>
            <div className="text-center text-4xl">
                <h2>Featured JObs :{jobs.length}</h2>
            </div>
            {
                    jobs.map(job=> <Job key={job.id} job={job} ></Job>)
            }
        </div>
    );
};

export default FeaturedJobs;