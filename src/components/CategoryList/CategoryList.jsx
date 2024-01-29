import { FaCashRegister } from "react-icons/fa";
import { IoMdFlashlight } from "react-icons/io";
import { GiDiscGolfBag } from "react-icons/gi";
import { SiGoogleearthengine } from "react-icons/si";


const CategoryList = () => {
    return (
        <div>
            <h2 className="text-5xl text-center font-bold pb-8">Job Category List</h2>
            <p className="text-center pb-4">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="md:flex pb-4">
                <div className="bg-purple-200 md:w-1/4 p-5 rounded-lg m-5 shadow-gray-700 shadow-lg">
                    <h2 className="text-5xl pb-3"><FaCashRegister /></h2>
                    <div>
                        <h2 className="font-bold pb-3">Accounts & Finance</h2>
                        <p>300+ Jobs Available</p>
                    </div>
                </div>
                <div className="bg-purple-200 md:w-1/4 p-5 rounded-lg m-5 shadow-gray-700 shadow-lg">
                    <h2 className="text-5xl pb-3 "><IoMdFlashlight /></h2>
                    <div>
                        <h2 className="font-bold pb-3">Creative Design</h2>
                        <p>300+ Jobs Available</p>
                    </div>
                </div>
                <div className="bg-purple-200 md:w-1/4 p-5 rounded-lg m-5 shadow-gray-700 shadow-lg">
                    <h2 className="text-5xl pb-3"><GiDiscGolfBag /></h2>
                    <div>
                        <h2 className="font-bold pb-3">Marketing & Sales</h2>
                        <p>300+ Jobs Available</p>
                    </div>
                </div>
                <div className="bg-purple-200 md:w-1/4 p-5 rounded-lg m-5 shadow-gray-700 shadow-lg">
                    <h2 className="text-5xl pb-3"><SiGoogleearthengine /></h2>
                    <div>
                        <h2 className="font-bold pb-3">Engineering Job</h2>
                        <p>300+ Jobs Available</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryList;