import bannerImage from '../../assets/img/banner_man_2.png';
const Banner = () => {
    const smoothScroll = (target) => {
        const element = document.querySelector(target);
        const targetPosition = element.offsetTop;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 2000; // Adjust the duration as needed (in milliseconds)
        let startTimestamp;

        const animation = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;

            const progress = timestamp - startTimestamp;
            window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));

            if (progress < duration) {
                requestAnimationFrame(animation);
            }
        };

        requestAnimationFrame(animation);
    };

    const easeInOutCubic = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    };
    return (
        <div className="bg-slate-200 rounded-lg  md:flex mb-8">
            <div className="pt-12 md:pl-24 px-5 w-full pb-12 md:w-2/3">
                <div className=" md:text-6xl text-3xl  font-extrabold pb-5"><h2 className='pb-4'>One Step </h2>
                    <h2 className='pb-4'>Closer To Your </h2>
                    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Dream Job</span>
                </div>
                <p className="md:w-3/4 w-full pb-4 md:pt-4 md:mb-4 text-lg text-justify">Explore the jobs that suits your skill and your field. Aplly as soon as possible and get the ultimate dream job of your. Make your career better today.So Start Today with Career Hub And there is never look back from here.</p>
                <div className='scroll-smooth delay-1000'>
                <a onClick={() => smoothScroll('#featured')}  href="#featured"><button  className="button scroll-smooth ">Get Started</button></a>
                </div>
            </div>
            <div className='md:w-2/5 md:inline hidden'>
                <img src={bannerImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;