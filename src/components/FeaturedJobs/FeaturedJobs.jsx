import { useEffect, useState } from "react";
import Job from "../Job/Job";
const FeaturedJobs = () => {  
    const [jobs,setJobs]=useState([]);
    //this is not the best way to show all data
    const [dataLength,setDataLength]=useState(4);

    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data));
    },[])
    return (
        <div>
            <div className="text-center text-4xl">
                <h2>Featured Jbs :{jobs.length}</h2>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-6">
            {
                    jobs.slice(0,dataLength).map(job=> <Job key={job.id} job={job} ></Job>)
            }
            </div>
            <div className={
                dataLength ===6 ? 'hidden': 'text-center'
            }><button 
            onClick={()=>setDataLength(6)}
            className="btn btn-primary text-2xl">Show all jobs</button></div>
        </div>
    );
};

export default FeaturedJobs;