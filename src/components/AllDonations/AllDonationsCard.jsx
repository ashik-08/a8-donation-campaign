import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const AllDonationsCard = () => {
  const [allDonations, setAllDonations] = useState([]);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const donations = JSON.parse(localStorage.getItem("donation"));

    if (donations) {
      setAllDonations(donations);
    } else {
      setNotFound("No Donations Made Yet!!!");
    }
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 mb-36">
        {allDonations.map((donation) => (
          <DonationCard key={donation.id} donation={donation}></DonationCard>
        ))}
      </div>
    </div>
  );
};

export default AllDonationsCard;
