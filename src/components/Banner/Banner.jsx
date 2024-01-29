import bannerImage from '../../assets/img/banner_man_2.png';
const Banner = () => {

    return (
        <div className="bg-slate-200 rounded-lg  md:flex mb-8">
            <div className="pt-12 md:pl-24 pl-10 w-full pb-12 md:w-2/3">
                <div className=" md:text-6xl text-3xl  font-extrabold pb-5"><h2 className='pb-4'>One Step </h2>
                    <h2 className='pb-4'>Closer To Your </h2>
                    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Dream Job</span>
                </div>
                <p className="md:w-3/4 w-full pb-4 md:pt-4 md:mb-4 text-lg">Explore the jobs that suits your skill and your field. Aplly as soon as possible and get the ultimate dream job of your. Make your career better today.So Start Today with Career Hub And there is never look back from here.</p>
                <button className="button ">Get Started</button>
            </div>
            <div className='md:w-2/5 md:inline hidden'>
                <img src={bannerImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;