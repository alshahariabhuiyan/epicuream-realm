import { Outlet } from "react-router-dom";
import Footer from "../Pages/Home/Footer/Footer";
import Navbar from "../Pages/Home/Navbar/Navbar";
import banner from '../assets/images/banner/banner-2.jpg'

const Details = () => {
    return (
        <div className="m-auto mt-20 bg-slate-800 rounded-xl" style={{height:'550px', width:'1240px'}}>
            <Outlet></Outlet>
        </div>
    );
};

export default Details;