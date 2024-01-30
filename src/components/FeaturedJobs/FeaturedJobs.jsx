import { useEffect, useState } from "react";
import Job from "../Job/Job";
// import TestJob from "../TestJob/TestJob";

const FeaturedJobs = () => {  
    const [jobs,setJobs]=useState([]);
    console.log(jobs,'jobs')
    //this is not the best way to show all data
    const [dataLength,setDataLength]=useState(4);

    useEffect(()=>{
        fetch('/jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data));
    },[])

    
    return (
        <div id="featured">
            
            <div className="md:grid md:grid-cols-2 md:gap-6">
            {
                    jobs.slice(0,dataLength).map(job=> <Job key={job.id} job={job}/>)
            }
            </div>
            <div className={
                dataLength ===6 ? 'hidden': 'text-center'
            }>
            <button 
            onClick={()=>setDataLength(6)}
            className="btn btn-primary text-2xl my-5">Show all jobs</button></div>
        </div>
    );
};

export default FeaturedJobs;