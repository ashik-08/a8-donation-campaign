import Banner from "../../components/Header/Banner/Banner";
import NavBar from "../../components/Header/NavBar/NavBar";

const Home = () => {
    return (
        <div className="banner-img bg-contain md:bg-cover bg-top md:bg-center bg-no-repeat h-[80vh]">
            <NavBar></NavBar>
            <Banner className="flex justify-center items-center"></Banner>
        </div>
    );
};

export default Home;