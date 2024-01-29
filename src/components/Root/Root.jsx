import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div className="flex flex-col m-auto min-h-screen">
            <div className="max-w-7xl md:mx-32">
            <Header></Header>
            </div>

            <div className="flex-grow max-w-7xl md:mx-32">
                <Outlet></Outlet>
            </div>
            <div className="w-full">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;
