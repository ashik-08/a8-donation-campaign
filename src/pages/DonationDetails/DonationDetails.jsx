import { useEffect, useState } from "react";
import NavBar from "../../components/Header/NavBar/NavBar";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsofDonation from "../../components/DetailsofDonation/DetailsofDonation";

const DonationDetails = () => {

    const [detail, setDetail] = useState([]);

    const { id } = useParams();

    const details = useLoaderData();

    useEffect( () => {
        const findDetail = details.find(detail => detail.id === id);
        setDetail(findDetail);
    }, [id, details]);

    return (
        <div className="container mx-auto">
            <NavBar></NavBar>
            <DetailsofDonation detail={detail}></DetailsofDonation>
        </div>
    );
};

export default DonationDetails;