
import { useLoaderData, useParams } from "react-router-dom";


const JObDetails = () => {
   const jobs=useLoaderData();
   const {id}=useParams();
   const idInt=parseInt(id);
   const job= jobs.find(job=> job.id === idInt);
   console.log(job);
    return (
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mt-8 mb-24">Job Describtion</h2>
            <div className="md:grid md:gap-4 md:grid-cols-4 md:text-xl text ">
                <div className="md:col-span-3 text-justify ">
                    <h2 className="mb-7"><span className="font-bold">Job Description: </span>{job.job_description}</h2>

                    <h2 className="mb-7"><span className="font-bold">Job Responsibility:</span>{job.job_responsibility}</h2>

                    <div>
                    <h2 className="font-bold mb-2">Educational Requirement</h2>
                    <p className="mb-12">{job.educational_requirements}</p>
                    </div>
                    <div>
                        <h2 className="font-bold mb-2">Experiences:</h2>
                        <p className="mb-8">{job.experiences}</p>
                    </div>
                </div>
                <div className="md:col-span-1 bg-slate-200 text-black rounded-xl p-4">
                    <h2 className="text-xl font-bold border-gray-300 border-b-2 text-black py-4">Job details</h2>
                    <div className="my-7">
                        <h2 className="mb-4"><span className="font-semibold ">Salary: </span>{job.salary}</h2>
                        <h2 className="mb-8 "><span className="font-semibold">Job Title : </span>{job.job_title}</h2>
                    </div>
                    <div className="">
                        <h2 className="font-bold border-b-2 border-gray-300 pb-3">Contat Information</h2>
                        <p className="my-3"><span className="font-semibold">Phone:</span> {job.contact_information.phone}</p>
                        <p className="my-3"><span className="font-semibold">Email:</span> {job.contact_information.email}</p>
                        <p className="my-3"><span className="font-semibold">Address:</span> <span className="text-lg">{job.contact_information.address}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JObDetails;