import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/Header/NavBar/NavBar";

const MainLayout = () => {

    const loc = useLocation();
    console.log(loc);

    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;