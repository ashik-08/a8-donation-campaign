import { useLoaderData } from "react-router-dom";
import AllCards from "../../components/Cards/AllCards";
import Banner from "../../components/Header/Banner/Banner";
import NavBar from "../../components/Header/NavBar/NavBar";

const Home = () => {
  const donations = useLoaderData();

  return (
    <>
      <div className="banner-img bg-contain lg:bg-cover bg-top lg:bg-center bg-no-repeat h-[45vh] md:h-[80vh]">
        <div className="container mx-auto">
          <NavBar></NavBar>
          <Banner></Banner>
        </div>
      </div>
      <div className="container mx-auto">
        <AllCards donations={donations}></AllCards>
      </div>
    </>
  );
};

export default Home;
