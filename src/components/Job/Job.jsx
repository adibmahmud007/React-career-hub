
import PropTypes from 'prop-types';
const Job = ({job}) => {
    const {job_title}=job;
    return (
        <div className='text-center mt-3'>
            <h2>Job title: {job_title}</h2>
        </div>
    );
};

Job.propTypes={
    job: PropTypes.object.isRequired,
}
export default Job;