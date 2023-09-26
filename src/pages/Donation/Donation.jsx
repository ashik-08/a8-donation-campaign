import AllDonationsCard from "../../components/AllDonations/AllDonationsCard";
import NavBar from "../../components/Header/NavBar/NavBar";

const Donation = () => {
    return (
        <div className="container mx-auto">
            <NavBar></NavBar>
            <AllDonationsCard></AllDonationsCard>
        </div>
    );
};

export default Donation;