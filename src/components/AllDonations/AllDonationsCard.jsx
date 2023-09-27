import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const AllDonationsCard = () => {
  const [allDonations, setAllDonations] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    const donations = JSON.parse(localStorage.getItem("donation"));

    if (donations) {
      setAllDonations(donations);
    } else {
      setNotFound("No Donations Made Yet!!!");
    }
  }, []);

  return (
    <div className="mt-14 mb-20 lg:mt-20 lg:mb-36">
        {/* donation card items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {allDonations &&
          allDonations
            .slice(0, dataLength)
            .map((donation) => (
              <DonationCard
                key={donation.id}
                donation={donation}
              ></DonationCard>
            ))}
      </div>
      {/* see all button */}
      {/* only shows when there are more than 4 donations */}
      <div
        className={
          dataLength === allDonations.length || allDonations.length <= 4 ? "hidden " : "text-center mt-10"
        }
      >
        <button
          onClick={() => setDataLength(allDonations.length)}
          className="bg-[#009444] text-white text-lg font-semibold px-5 py-2.5 rounded-lg"
        >
          See All
        </button>
      </div>
    </div>
  );
};

export default AllDonationsCard;
